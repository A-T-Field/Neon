/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:47:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 13:49:01
 * @Description: file content
 */
import type { RouterScrollBehavior } from 'vue-router';

export const handlerScrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    return {
        left: 0,
        top: 0,
        behavior: "smooth"
    }
}