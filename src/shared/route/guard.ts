/*
 * @Author: maggot-code
 * @Date: 2022-04-05 16:28:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 17:58:08
 * @Description: file content
 */
import type {
    Router,
    RouteLocationNormalized,
    RouteLocationRaw
} from 'vue-router';

import {
    LowercallSupport,
    Lowercall
} from '@/shared/utils/lower-call';

type RouteBeforeContext = { to: RouteLocationNormalized, from: RouteLocationNormalized };
type RouteBeforeReturn = void | boolean | undefined | Error | RouteLocationRaw;

const p1 = async ({ ctx }) => {
    console.log(1);
    ctx["p1"] = true;
    // await test1(ctx);
    console.log(2);
    return ctx;
}

const routeBeforeGuard = Lowercall.create({
    task: [
        {
            name: "p1",
            handler: p1
        }
    ]
});

console.log(routeBeforeGuard);

export function setupGuard(router: Router) {
    router.beforeEach(async (to, from) => {
        const res = await routeBeforeGuard.dispatch({});
        console.log(res);

        return true;
    });
}