/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-06 11:07:50
 * @Description: file content
 */
import AppProxy from '@/layout/AppProxy/AppProxy.vue';
import AppGlobal from '@/layout/AppGlobal/AppGlobal.vue';
import { createApp } from 'vue';
import { setupView } from '@/view';
import { setupStore } from '@/shared/store';
import { setupRouter } from '@/shared/route';
import "normalize.css";

async function main() {
    const proxy = createApp(AppProxy);
    const global = createApp(AppGlobal);

    setupView();
    setupStore(global);
    proxy.mount("#app-proxy", true);

    await setupRouter(global);
    global.mount("#app", true);
}

void main();