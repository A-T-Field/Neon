/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:38:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 16:11:36
 * @Description: file content
 */
import type { AppRouteRecordRaw } from 'vue-router';

export default (): AppRouteRecordRaw => {
    const basicsRoutes = import.meta.globEager("./**/*.ts");

    return Reflect.ownKeys(basicsRoutes).map((key) => {
        const raw = basicsRoutes[key.toString()];
        return raw.default;
    });
};