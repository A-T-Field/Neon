/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:47:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 16:49:07
 * @Description: file content
 */
import type { App } from 'vue';

import { createPinia } from 'pinia';

export const store = createPinia();

export function setupStore(app: App): void {
    app.use(store);
}