/*
 * @Author: maggot-code
 * @Date: 2022-04-02 13:39:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 15:13:54
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

export default {
    name: "notpage",
    path: "/404",
    meta: {
        componentName: "NotPage",
        title: "没有资源",
        isAsync: false
    }
} as RouteRecordRaw;