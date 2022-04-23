/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-23 17:40:51
 * @Description: file content
 */
import { createApp } from 'vue';
import { setupRouter } from "@neon-router/provide";

import AppProxy from "@neon-layouts/AppProxy.vue";
import App from "@neon-layouts/App.vue";

import "normalize.css";
import "@neon/assets/style/index.scss";

async function main() {
    const appProxy = createApp(AppProxy);
    const app = createApp(App);

    appProxy.mount('#app-proxy');

    await setupRouter(app);

    app.mount('#app');
}

void main();