/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-19 22:26:01
 * @Description: file content
 */
import { createApp } from 'vue';
import AppGlobal from '@neon/components/AppGlobal/AppGlobal.vue';
import "normalize.css";

async function main() {
    const global = createApp(AppGlobal);

    global.mount("#app", true);
}

void main();