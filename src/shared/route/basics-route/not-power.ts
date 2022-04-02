/*
 * @Author: maggot-code
 * @Date: 2022-04-02 17:11:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 17:11:06
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "notpower",
    path: "/403",
    meta: {
        componentName: "NotPower",
        title: "没有权限",
        isAsync: false
    }
} as RouteRecordRaw;