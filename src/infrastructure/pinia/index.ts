/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:35:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 15:27:56
 * @Description: file content
 */
import type { App } from 'vue';

import { createPinia } from 'pinia';

const pinia = createPinia();

export function setupPinia(app: App) {
    app.use(pinia);
}