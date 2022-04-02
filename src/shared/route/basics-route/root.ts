/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:38:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 14:41:04
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "root",
    path: "/",
    redirect: "/ready",
    meta: {
        isAsync: false
    }
} as RouteRecordRaw;