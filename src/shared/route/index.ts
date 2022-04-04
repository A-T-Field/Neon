/*
 * @Author: maggot-code
 * @Date: 2022-03-30 23:24:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:43:51
 * @Description: file content
 */
import type { App } from 'vue';
import type { Router } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import { routeTransform } from '@/shared/route/transform';
import Root from '@/shared/route/basics-route/root';
import Ready from '@/shared/route/basics-route/ready';
import Crash from '@/shared/route/basics-route/crash';
import NotPoage from '@/shared/route/basics-route/not-page';
import NotPower from '@/shared/route/basics-route/not-power';

const router = createRouter({
    strict: true,
    routes: [{
        path: "/",
        name: "root",
        redirect: "/ready"
    }, {
        path: "/ready",
        name: "ready",
        component: () => import("@/pages/Ready/Ready.vue")
    }],
    history: createWebHashHistory()
});

const p1 = async () => {
    return true;
}

router.beforeEach(async (to) => {
    console.log(to);
    return await p1();
})

// predecessor and successor and scumbag:  
export async function setupRouter(app: App): Promise<Router> {
    app.use(router);

    await router.isReady();

    return router;
}