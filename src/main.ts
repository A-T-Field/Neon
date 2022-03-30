/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-30 17:51:58
 * @Description: file content
 */
import "normalize.css";
import { createApp } from 'vue';
import { default as AppProxy } from '@/layout/app-proxy';
import { default as AppGlobal } from '@/layout/app-global';

function bootstrap() {
    const proxy = createApp(AppProxy);
    const global = createApp(AppGlobal);

    proxy.mount("#app-proxy", true);
    global.mount("#app", true);
}

void bootstrap();