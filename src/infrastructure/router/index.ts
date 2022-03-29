/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:37:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 13:50:21
 * @Description: file content
 */
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { handlerScrollBehavior } from './support';

const routerCase = createRouter({
    routes: [],
    strict: true,
    history: createWebHashHistory(),
    scrollBehavior: handlerScrollBehavior
});

export async function setupRouter(app: App) {
    app.use(routerCase);

    await routerCase.isReady();

    return routerCase;
}