/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:40:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 15:13:47
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "crash",
    path: "/500",
    meta: {
        componentName: "Crash",
        title: "崩溃",
        isAsync: false
    }
} as RouteRecordRaw;