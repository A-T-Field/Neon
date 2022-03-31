/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 15:49:40
 * @Description: file content
 */
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '#/router/transform';

const router = createRouter({
    strict: true,
    routes: routeTransform([]),
    history: createWebHashHistory()
});

export function setupRouter(app: App) {
    app.use(router);
}