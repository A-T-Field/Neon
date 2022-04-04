/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:43:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:15:30
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "ready",
    path: "/ready",
    meta: {
        componentName: "/pages/Ready/Ready",
        title: "准备",
        isAsync: false
    }
} as RouteRecordRaw;