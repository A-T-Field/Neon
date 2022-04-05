/*
 * @Author: maggot-code
 * @Date: 2022-04-05 15:50:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 15:55:39
 * @Description: file content
 */
import type { App } from 'vue';

import { createPinia } from 'pinia';

export const store = createPinia();

export function setupStore(app: App) {
    app.use(store);
}