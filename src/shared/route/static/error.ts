/*
 * @Author: maggot-code
 * @Date: 2022-04-05 16:19:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 16:27:27
 * @Description: file content
 */
import type { AppRouteRecordRaw } from 'vue-router';

export default [
    {
        name: "crash",
        path: "/500",
        meta: {
            componentName: "/pages/Crash/Crash",
            title: "崩溃",
            isAsync: false
        }
    },
    {
        name: "notPower",
        path: "/403",
        meta: {
            componentName: "/pages/NotPower/NotPower",
            title: "没有权限",
            isAsync: false
        }
    },
    {
        name: "notPage",
        path: "/404",
        meta: {
            componentName: "/pages/NotPage/NotPage",
            title: "没有资源",
            isAsync: false
        }
    }
] as AppRouteRecordRaw;