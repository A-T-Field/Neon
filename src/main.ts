/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 10:54:28
 * @Description: file content
 */
import { createApp } from 'vue';

import App from '@neon-layouts/App.vue';

import 'normalize.css';
import '@neon/assets/style/index.scss';

async function main() {
    const app = createApp(App);
    app.mount('#app');
}

void main();
