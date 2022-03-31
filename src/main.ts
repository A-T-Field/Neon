/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-31 15:55:03
 * @Description: file content
 */
import "normalize.css";
import { createApp } from 'vue';
import { setupRouter } from '#/router';
import { default as AppProxy } from "@/layout/AppProxy";
import { default as AppGlobal } from "@/layout/AppGlobal";

function bootstrap() {
    const proxy = createApp(AppProxy);
    const global = createApp(AppGlobal);

    proxy.mount("#app-proxy", true);

    setupRouter(global);

    global.mount("#app", true);
}

void bootstrap();