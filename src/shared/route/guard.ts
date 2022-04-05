/*
 * @Author: maggot-code
 * @Date: 2022-04-05 16:28:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 00:39:44
 * @Description: file content
 */
import type { Router } from 'vue-router';
import {
    Channel,
    ChannelSupport,
    ChannelTask,
    ChannelDriveHandler
} from '@/shared/utils/channel';

class RouteChannel implements ChannelSupport {
    task: ChannelTask[] = [];
    use = (middleware: ChannelTask): void => {
        this.task.push(middleware);
    }
}

const p1: ChannelDriveHandler = (body) => {
    console.log('p1');
    body.ctx.p1 = true;
    return body.next(body.ctx);
}
const p2: ChannelDriveHandler = (body) => {
    console.log('p2');
    body.ctx.p2 = true;
    return body.next(body.ctx);
}

const routerBefore = Channel.create(new RouteChannel());
routerBefore.collect([p1, p2]);
const res = routerBefore.dispatch({});
console.log(res);
console.log(routerBefore);

export function setupGuard(router: Router) { }