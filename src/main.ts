/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 16:55:53
 * @Description: file content
 */
import "normalize.css";
import { createApp } from 'vue';
import { setupRouter, setupRouterGuard } from '#/router';
import { default as RouterBefore } from 'mid/RouterBefore';
// import { default as RouterAfter } from 'mid/RouterAfter';
import { default as AppProxy } from "@/layout/AppProxy";
import { default as AppGlobal } from "@/layout/AppGlobal";

async function bootstrap() {
    const proxy = createApp(AppProxy);
    const global = createApp(AppGlobal);

    proxy.mount("#app-proxy", true);

    setupRouter(global);
    await setupRouterGuard(
        RouterBefore
    ).isReady();

    global.mount("#app", true);
}

void bootstrap();