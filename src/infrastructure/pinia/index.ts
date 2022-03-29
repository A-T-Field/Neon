/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:35:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 13:45:13
 * @Description: file content
 */
import type { App } from 'vue';

import { PiniaRoot } from '#/context/symbol';
import { createPinia } from 'pinia';

const pinia = createPinia();

function mountPinia() {
    return {
        [PiniaRoot]: pinia
    }
}

export function setupPinia(app: App) {
    pinia.use(mountPinia);

    app.use(pinia);
}