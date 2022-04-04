/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:39:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-04 19:15:22
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "notpage",
    path: "/404",
    meta: {
        componentName: "/pages/NotPage/NotPage",
        title: "没有资源",
        isAsync: false
    }
} as RouteRecordRaw;