/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 17:21:37
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '@/shared/route/transform';
import { stupPredecessor } from '@/shared/route/predecessor';
import { default as setupBasicsRoute } from '@/shared/route/basics-route';

// predecessor and successor and scumbag:  
export async function setupRouter(app: App): Promise<Router> {
    const router = createRouter({
        strict: true,
        routes: routeTransform(setupBasicsRoute()),
        history: createWebHashHistory()
    });

    app.use(router);

    router.beforeEach(stupPredecessor);
    // router.afterEach(setupSuccessor);
    router.onError((err) => {
        console.log(err);
    });

    await router.isReady();

    return router;
}