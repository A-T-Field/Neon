/*
 * @Author: maggot-code
 * @Date: 2022-04-05 16:19:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 16:25:54
 * @Description: file content
 */
import type { AppRouteRecordRaw } from 'vue-router';

export default [
    {
        name: "index",
        path: "/",
        redirect: "/ready"
    },
    {
        name: "ready",
        path: "/ready",
        meta: {
            componentName: "/pages/Ready/Ready",
            title: "准备",
            isAsync: false,
        }
    }
] as AppRouteRecordRaw;