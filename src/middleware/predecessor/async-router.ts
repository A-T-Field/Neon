/*
 * @Author: maggot-code
 * @Date: 2022-04-07 15:55:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-07 16:59:55
 * @Description: file content
 */
import { LowercallTask, LowercallCollect } from '@/shared/utils/lower-call';

const t1 = (ctx) => new Promise((resolve) => {
    setTimeout(() => {
        console.log('t1');
        ctx["t1"] = true;
        resolve(ctx);
    }, 3000);
});
const h1 = async ({ ctx }) => {
    console.log('h1');
    ctx["h1"] = true;
    await t1(ctx);
    console.log('hh1');
    return ctx;
}
const p1: LowercallTask = {
    name: "p1",
    handler: h1,
    order: 1
}

export default (lowercall: LowercallCollect) => lowercall.collect(p1);