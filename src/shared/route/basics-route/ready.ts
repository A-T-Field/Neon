/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:43:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 15:14:00
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "ready",
    path: "/ready",
    meta: {
        componentName: "Ready",
        title: "准备",
        isAsync: false
    }
} as RouteRecordRaw;