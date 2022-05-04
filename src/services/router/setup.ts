/*
 * @Author: maggot-code
 * @Date: 2022-04-20 00:21:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 00:35:15
 * @Description: file content
 */
import type { App } from 'vue';
import { default as router } from "./core";

export async function setupRouter(app: App) {
    app.use(router);

    await router.isReady();
    return Promise.resolve(router);
}

export function setupRouterBeforeEach(app: App) { }

export function setupRouterAfterEach(app: App) { }