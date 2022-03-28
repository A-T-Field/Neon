/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:54:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 16:54:23
 * @Description: file content
 */
import type { RouterScrollBehavior } from 'vue-router';

// 处理滚动条操作
export const handlerScrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
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