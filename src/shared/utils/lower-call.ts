/*
 * @Author: maggot-code
 * @Date: 2022-04-06 09:43:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-07 17:01:03
 * @Description: file content
 */
import { each } from '@/shared/utils/loop';
import { isArray, isFunc } from '@/shared/utils/checkers';

export type LowercallHandlerBody = {
    ctx: any;
    cancel: (res: any) => Promise<any>;
}
export type LowercallHandler = (body: LowercallHandlerBody) => Promise<any>;
export interface LowercallTask {
    handler: LowercallHandler;
    name: string;
    order?: number;
    use?: boolean;
};
export type LowercallTaskGather<T extends LowercallTask = LowercallTask> = Array<T>;
export class LowercallSupport {
    task: LowercallTaskGather = [];
    use?: (task: LowercallTask) => LowercallTask;
}

export class LowercallWork<W> {
    private work: Array<W> = [];
    private constructor(work: Array<W>) {
        this.work = work;
    }
    get noWork() {
        return this.work.length <= 0;
    }
    install(handler: (raw: any) => any) {
        return this.work.map((raw) => {
            return handler(raw);
        });
    }
    static create<W = any>(work: Array<W> | W) {
        return new LowercallWork<W>(
            isArray(work)
                ? work
                : [work]
        );
    }
}

export type LowercallCollect = Pick<Lowercall, "collect">;
export class Lowercall {
    // 注入的链
    private chain: LowercallSupport;
    // 记录目前链节点位置
    private idx: number;
    private constructor(lowercall: LowercallSupport) {
        this.chain = lowercall;
        this.idx = 0;
        this.sort();
    }
    get task() {
        return this.chain.task;
    }
    get size() {
        return this.task.length;
    }
    get noNext() {
        return this.size - 1 <= this.idx;
    }
    get noTask() {
        return this.size <= 0;
    }
    get use() {
        return isFunc(this.chain.use)
            ? this.chain.use
            : (node: any) => node;
    }
    private handlerTask = async (context: any) => {
        // 中断信号，用来记录本次调用是否被中断过
        let sig = false;

        const cancel = (res: any) => {
            sig = true;
            return res;
        }

        const result = await this.task[this.idx]?.handler({
            ctx: context,
            cancel
        });

        return { sig, result }
    }
    dispatch = async (context?: any) => {
        if (this.noTask) return Promise.resolve(undefined);

        // 执行任务
        const { sig, result } = await this.handlerTask(context);

        // 没有下一个任务或者信号被中断会结束链,重置记录节点
        // 否则的话继续下一个任务
        if (this.noNext || sig) {
            this.idx = 0;
            return Promise.resolve(result);
        } else {
            this.idx += 1;
            return await this.dispatch(context);
        }
    }
    collect<T extends LowercallTask>(flowPath: LowercallTaskGather<T> | T) {
        const work = LowercallWork.create<T>(flowPath);

        if (work.noWork) return this;

        this.chain.task.push(...work.install(this.use));

        this.sort();

        return this;
    }
    install(modules: any) {
        each(modules, (module) => module?.default(this));
        return this;
    }
    sort() {
        if (this.size <= 0) return;
        this.chain.task.sort((prev, next) => {
            const prevOrder = prev.order ?? 0;
            const nextOrder = next.order ?? 0;
            return prevOrder - nextOrder;
        })
    }
    static create<LS extends LowercallSupport = LowercallSupport>(lowercall: LS) {
        return new Lowercall(lowercall);
    }
}