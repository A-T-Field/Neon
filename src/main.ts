/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 00:38:03
 * @Description: file content
 */
import { createApp } from 'vue';
import {
    setupRouter,
    setupRouterBeforeEach,
    setupRouterAfterEach,
} from "@neon-router/provide";
// import {} from "@neon-network/";

import AppProxy from "@neon/layouts/AppProxy.vue";
import App from '@neon/layouts/App.vue';

import "normalize.css";
import "@neon/style/index.scss";

async function main() {
    const appProxy = createApp(AppProxy);
    const app = createApp(App);

    appProxy.mount('#app-proxy');

    setupRouterBeforeEach(app);
    setupRouterAfterEach(app);
    await setupRouter(app);

    app.mount('#app');
}

void main();