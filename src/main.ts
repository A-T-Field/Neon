/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-03 21:27:36
 * @Description: file content
 */
import AppProxy from '@/layout/AppProxy/AppProxy.vue';
import AppGlobal from '@/layout/AppGlobal/AppGlobal.vue';
import "normalize.css";
import { createApp } from 'vue';
import { setupRouter } from '@/shared/route';

async function main() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    appProxy.mount("#app-proxy", true);

    await setupRouter(appGlobal);
    appGlobal.mount("#app", true);
}

void main();