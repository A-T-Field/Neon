/*
 * @Author: maggot-code
 * @Date: 2022-03-26 21:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-17 23:12:13
 * @Description: file content
 */
import { createApp } from 'vue';
import AppGlobal from '@/components/AppGlobal/AppGlobal.vue';
import "normalize.css";
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    routes: [],
    history: createWebHashHistory(),
    strict: true
});

const rr = {
    pedestal: router.beforeEach,
    chain: [],
    setupChain: (node: any) => {
        rr.chain.push(node);
    },
    run: () => {
        rr.chain.forEach(node => {
            rr.pedestal(node)
        });
    }
}
const r1 = () => {
    console.log(11);
    return false;
}
const r2 = () => {
    console.log(22);
    return true;
}

rr.setupChain(r1);
rr.setupChain(r2);
console.log(rr);
rr.run();

async function main() {
    const global = createApp(AppGlobal);

    global.use(router);
    global.mount("#app", true);
}

void main();