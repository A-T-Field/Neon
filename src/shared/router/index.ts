/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 16:50:12
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
export function setupRouterGuard(predecessor): Router {
    router.beforeEach(predecessor);

    // router.afterEach(successor);

    // router.onError(scumbag);

    return router;
}

export function setupRouter(app: App): Router {
    app.use(router);

    return router;
}