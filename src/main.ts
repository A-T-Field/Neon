/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 16:45:15
 * @Description: file content
 */
import "normalize.css";
import AppProxy from '@/layout/AppProxy';
import AppGlobal from '@/layout/AppGlobal';
import { createApp } from 'vue';
import { setupAppStore } from '@/shared/store/app';
import { setupBizStore } from '@/shared/store/biz';
import { setupRouter } from '@/shared/route';

async function main() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    setupAppStore(appProxy);
    appProxy.mount("#app-proxy", true);

    setupBizStore(appGlobal);
    await setupRouter(appGlobal);
    appGlobal.mount("#app", true);
}

void await main();