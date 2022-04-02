/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 17:03:07
 * @Description: file content
 */
import "normalize.css";
import AppProxy from '@/layout/AppProxy';
import AppGlobal from '@/layout/AppGlobal';
import { createApp } from 'vue';
import { setupAppStore } from '@/shared/store/app';
import { setupBizStore } from '@/shared/store/biz';
import { setupRouter } from '@/shared/route';
import { default as setupPages } from '@/pages';

async function main() {
    const appProxy = createApp(AppProxy);
    const appGlobal = createApp(AppGlobal);
    // 需要优先挂载 page 集合
    // 不然无法在路由挂载中找到 page
    setupPages();

    setupAppStore(appProxy);
    appProxy.mount("#app-proxy", true);

    setupBizStore(appGlobal);
    await setupRouter(appGlobal);
    appGlobal.mount("#app", true);
}

void main();