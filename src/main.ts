/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 15:44:17
 * @Description: file content
 */
import { createApp } from 'vue';
import { default as AppProxy } from '#/components/app-proxy';
import { default as AppGlobal } from '#/components/app-global';

async function bootstrap() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    appProxy.mount("#app-proxy", true);

    appGlobal.mount("#app", true);
}

void bootstrap();