/*
 * @Author: maggot-code
 * @Date: 2022-04-05 16:54:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 00:37:05
 * @Description: file content
 */
import { isArray } from '@/shared/utils/checkers';

export type ChannelDriveHandler = (ctx: any) => any;
export interface ChannelDrive {
    ctx: any;
    next: ChannelDriveHandler;
    quite: ChannelDriveHandler;
}
export type ChannelTask = (drive: ChannelDrive) => void;
export abstract class ChannelSupport {
    abstract task: Array<ChannelTask>;
    abstract use: (middleware: ChannelTask) => void;
}

export class Channel {
    // support
    private channel!: ChannelSupport;
    private idx: number = 0;
    // channel = support
    private constructor(channel: ChannelSupport) {
        this.channel = channel;
    }
    static create(channel: ChannelSupport) {
        return new Channel(channel);
    }
    // 节点函数 ({ctx,next,quite})=> next | quite;
    get task() {
        return this.channel.task;
    }
    get size() {
        return this.channel.task.length;
    }
    get notNext() {
        return this.idx === this.size;
    }
    // middleware 和 ChannelSupport.use 参数相同
    collect(middleware: Array<ChannelTask> | ChannelTask) {
        (isArray(middleware)
            ? middleware
            : [middleware]
        ).forEach(this.channel.use);
    }
    // 只收集上下文
    dispatch = (context: any) => {
        const handler = this.task[this.idx];
        // 参数是包含上下文的驱动器
        return handler({
            ctx: context,
            next: this.next,
            quite: this.quite
        });
    }
    private next = (ctx: any) => {
        this.idx += 1;
        return this.notNext ? this.quite(ctx) : this.dispatch(ctx);
    }
    private quite = (ctx: any) => {
        this.idx = 0;
        return ctx;
    }
}