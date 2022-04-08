/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 10:01:00
 * @Description: file content
 */
import { createApp } from 'vue';
import AppGlobal from '@/components/AppGlobal/AppGlobal.vue';
import "normalize.css";

async function main() {
    const global = createApp(AppGlobal);

    global.mount("#app", true);
}

void main();