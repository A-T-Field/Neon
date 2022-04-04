/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 22:08:48
 * @Description: file content
 */
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import AppGlobal from '@/components/AppGlobal/AppGlobal.vue';
import "normalize.css";

async function main() {
    const global = createApp(AppGlobal);

    const router = createRouter({
        history: createWebHashHistory(),
        routes: setupLayouts(generatedRoutes)
    });

    global.use(router);

    console.log(router.getRoutes());

    await router.isReady();

    global.mount("#app", true);
}

void main();