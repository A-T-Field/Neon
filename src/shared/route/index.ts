/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-07 15:45:34
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '@/shared/route/transform';
import { setupPredecessor } from "@/middleware/predecessor";
import BaseRoutes from '@/shared/route/static/base';
import ErrorRoutes from '@/shared/route/static/error';

// predecessor and successor and scumbag:  
export async function setupRouter(app: App): Promise<Router> {
    const router = createRouter({
        strict: true,
        routes: routeTransform([
            ...BaseRoutes,
            ...ErrorRoutes
        ]),
        history: createWebHashHistory()
    });

    router.beforeEach(setupPredecessor);
    router.afterEach((to, from) => { });
    router.onError((error, to, from) => {
        console.log(error, to, from);

        return true;
    });

    app.use(router);

    await router.isReady();

    return router;
}