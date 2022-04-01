/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 18:16:06
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '@/shared/route/transform';
import { stupPredecessor } from '@/shared/route/predecessor';

const router = createRouter({
    strict: true,
    routes: routeTransform([]),
    history: createWebHashHistory()
});

// predecessor and successor and scumbag:  
export async function setupRouter(app: App): Promise<Router> {
    app.use(router);

    router.beforeEach(stupPredecessor);
    // router.afterEach(setupSuccessor);
    // router.onError(setupScumbag);

    await router.isReady();

    return router;
}