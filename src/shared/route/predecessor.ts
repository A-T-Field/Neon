/*
 * @Author: maggot-code
 * @Date: 2022-04-01 17:13:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 18:18:05
 * @Description: file content
 */
import type { NavigationGuardWithThis, AppRouteBeforeContext } from 'vue-router';

import BeforeMiddleware from '@/middleware/RouterBefore';

const middleware = BeforeMiddleware();

export const stupPredecessor: NavigationGuardWithThis<any> = async (to, from) => {
    try {
        const { passto, body } = await middleware({ to, from });
        console.log(passto, body);
        return true;
    } catch (ctx) {
        console.log(ctx);

        const { body } = ctx as unknown as AppRouteBeforeContext;

        return body;
    }
};