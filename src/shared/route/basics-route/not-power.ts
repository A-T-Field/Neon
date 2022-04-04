/*
 * @Author: maggot-code
 * @Date: 2022-04-02 17:11:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:15:26
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "notpower",
    path: "/403",
    meta: {
        componentName: "/pages/NotPower/NotPower",
        title: "没有权限",
        isAsync: false
    }
} as RouteRecordRaw;