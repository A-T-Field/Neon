/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:49:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 17:36:05
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { handlerScrollBehavior } from '#/router/support';

const router = createRouter({
    routes: [],
    strict: true,
    history: createWebHashHistory(import.meta.env.VITE_BASE_URI),
    scrollBehavior: handlerScrollBehavior
});

export function setupRouter(app: App): Router {
    app.use(router);

    return router;
}