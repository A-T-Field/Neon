/*
* @Author: maggot-code
* @Date: 2022-04-02 13:40:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:15:17
* @Description: file content
*/
import type { RouteRecordRaw } from "vue-router";

export default {
    name: "crash",
    path: "/500",
    meta: {
        componentName: "/pages/Crash/Crash",
        title: "崩溃",
        isAsync: false
    }
} as RouteRecordRaw;