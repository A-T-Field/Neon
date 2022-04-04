/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 20:50:18
 * @Description: file content
 */
import AppProxy from '@/layout/AppProxy/AppProxy.vue';
import AppGlobal from '@/layout/AppGlobal/AppGlobal.vue';
import { createApp } from 'vue';
import "normalize.css";

async function main() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);

    appProxy.mount("#app-proxy", true);

    appGlobal.mount("#app", true);
}

void main();