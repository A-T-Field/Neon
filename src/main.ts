/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 17:35:23
 * @Description: file content
 */
import { createApp } from 'vue';
import { setupStore } from '#/store';
import { setupRouter } from '#/router';
import { default as AppProxy } from '@/components/app-proxy';
import { default as AppGlobal } from '@/components/app-global';

import "normalize.css";

async function bootstrap() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    setupStore(appGlobal);

    appProxy.mount("#app-proxy", true);

    await setupRouter(appGlobal).isReady();

    appGlobal.mount("#app", true);
}

void bootstrap();