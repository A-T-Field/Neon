/*
 * @Author: maggot-code
 * @Date: 2022-04-06 09:43:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 18:12:58
 * @Description: file content
 */
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
export abstract class LowercallSupport {
    abstract task: LowercallTaskGather;
    abstract use?: (task: LowercallTask) => LowercallTask;
}

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
    collect<T extends LowercallTask>(flowPath: LowercallTaskGather<T> | T) {
        const work = (isArray(flowPath) ? flowPath : [flowPath]);
        if (work.length <= 0) return this;

        work.forEach((raw) => {
            this.chain.task.push(this.use(raw));
        });

        this.sort();

        return this;
    }
    dispatch = async (context?: any) => {
        if (this.noTask) return Promise.resolve(undefined);

        // 中断信号，用来记录本次调用是否被中断过
        let sig = false;
        const cancel = (res: any) => {
            sig = true;
            return res;
        }

        const { handler } = this.task[this.idx];
        const result = await handler({
            ctx: context,
            cancel
        });

        // 没有下一个任务或者信号被中断结束链,重置记录节点
        // 继续下一个任务
        if (this.noNext || sig) {
            this.idx = 0;
            return Promise.resolve(result);
        } else {
            this.idx += 1;
            return await this.dispatch(context);
        }
    }
    sort() {
        if (this.size <= 0) return;
        this.chain.task.sort((prev, next) => {
            const prevOrder = prev.order ?? 0;
            const nextOrder = next.order ?? 0;
            return prevOrder - nextOrder;
        })
    }
    static create(lowercall: LowercallSupport) {
        return new Lowercall(lowercall);
    }
}