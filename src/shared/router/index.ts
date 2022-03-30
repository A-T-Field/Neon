/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-30 23:52:28
 * @Description: file content
 */
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';

export function setupRouter(app: App) {
    const router = createRouter({
        strict: true,
        routes: [],
        history: createWebHashHistory()
    });
    // .beforeEach
    // .afterEach

    app.use(router);
}