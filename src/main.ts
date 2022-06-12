/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-13 00:20:35
 * @Description: file content
 */
import { createApp } from 'vue';

import AppProxy from "@neon-layouts/AppProxy.vue";
import App from "@neon-layouts/App.vue";

import "normalize.css";
import "@neon/assets/style/index.scss";

async function main() {
    const appProxy = createApp(AppProxy);
    const app = createApp(App);

    appProxy.mount('#app-proxy');

    app.mount('#app');
}

void main();
