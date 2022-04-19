/*
 * @Author: maggot-code
 * @Date: 2022-04-20 00:13:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 00:13:25
 * @Description: file content
 */
import type { RouterScrollBehavior } from 'vue-router';

// 处理滚动条操作
export const setupScroll: RouterScrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return {
            left: 0,
            top: 0,
            behavior: "smooth"
        }
    }
}