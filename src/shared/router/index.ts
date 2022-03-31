/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 23:39:37
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '#/router/transform';

const router = createRouter({
    strict: true,
    routes: routeTransform([]),
    history: createWebHashHistory()
});

// predecessor and successor and scumbag
export async function setupRouter(app: App): Promise<Router> {
    app.use(router);

    // router.beforeEach();
    // router.afterEach();
    // router.onError();

    await router.isReady()

    return router;
}