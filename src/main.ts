/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:28:33
 * @Description: file content
 */
import AppProxy from '@/layout/AppProxy/AppProxy.vue';
import AppGlobal from '@/layout/AppGlobal/AppGlobal.vue';
import { createApp } from 'vue';
import { setupView } from '@/view';
import { setupRouter } from '@/shared/route';
import "normalize.css";

async function main() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    setupView();
    appProxy.mount("#app-proxy", true);

    await setupRouter(appGlobal);
    appGlobal.mount("#app", true);
}

void main();