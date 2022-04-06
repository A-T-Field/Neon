/*
 * @Author: maggot-code
 * @Date: 2022-04-06 09:43:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 18:01:32
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
    // inject
    private embryo: LowercallSupport;
    private idx: number;
    private constructor(lowercall: LowercallSupport) {
        this.embryo = lowercall;
        this.idx = 0;
        this.sort();
    }
    get use() {
        return isFunc(this.embryo.use)
            ? this.embryo.use
            : (node: any) => node;
    }
    get task() {
        return this.embryo.task;
    }
    get size() {
        return this.task.length;
    }
    get notNext() {
        return this.size - 1 <= this.idx;
    }
    get notTask() {
        return this.size <= 0;
    }
    collect<T extends LowercallTask>(flowPath: LowercallTaskGather<T> | T) {
        const work = (isArray(flowPath) ? flowPath : [flowPath]);
        if (work.length <= 0) return this;

        work.forEach((raw) => {
            this.embryo.task.push(this.use(raw));
        });
        this.sort();
        return this;
    }
    dispatch = async (context?: any) => {
        if (this.notTask) return Promise.resolve(undefined);

        let token = false;
        const cancel = (res: any) => {
            token = true;
            return res;
        }

        const { handler } = this.task[this.idx];

        const result = await handler({
            ctx: context,
            cancel
        });

        if (this.notNext || token) {
            this.idx = 0;
            return Promise.resolve(result);
        } else {
            this.idx += 1;
            return await this.dispatch(context);
        }
    }
    sort() {
        if (this.size <= 0) return;
        this.embryo.task.sort((prev, next) => {
            const prevOrder = prev.order ?? 0;
            const nextOrder = next.order ?? 0;
            return prevOrder - nextOrder;
        })
    }
    static create(lowercall: LowercallSupport) {
        return new Lowercall(lowercall);
    }
}