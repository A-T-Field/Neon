/*
 * @Author: maggot-code
 * @Date: 2022-04-01 16:08:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 16:38:59
 * @Description: file content
 */
import type { App } from 'vue';
import type { Pinia } from 'pinia';

import { createPinia } from 'pinia';

export default class StoreHouse {
    private pinia: Pinia;
    private constructor() {
        this.pinia = createPinia();
    }

    get store() {
        return this.pinia;
    }
    setup = (app: App) => {
        app.use(this.pinia);
    }

    static create() {
        return new StoreHouse();
    }
}