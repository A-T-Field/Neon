/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:30:12
 * @Description: file content
 */
import { createApp } from 'vue';
import { setupPinia } from '@/infrastructure/pinia';
import { setupRouter } from '@/infrastructure/router';
import { default as AppProxy } from '@/layout/app-proxy';
import { default as AppGlobal } from '@/layout/app-global';

import "normalize.css";

async function bootstrap() {
    const appProxy = createApp(AppProxy);

    const appGlobal = createApp(AppGlobal);

    setupPinia(appGlobal);

    appProxy.mount("#app-proxy", true);

    await setupRouter(appGlobal);

    appGlobal.mount("#app", true);
}

void bootstrap();