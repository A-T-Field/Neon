/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 13:28:15
 * @Description: file content
 */
import "normalize.css";
import { createApp } from 'vue';
import { setupRouter } from '#/router';
import { default as AppProxy } from "@/layout/AppProxy";
import { default as AppGlobal } from "@/layout/AppGlobal";

async function bootstrap() {
    const proxy = createApp(AppProxy);
    const global = createApp(AppGlobal);

    proxy.mount("#app-proxy", true);

    await setupRouter(global);

    global.mount("#app", true);
}

void await bootstrap();