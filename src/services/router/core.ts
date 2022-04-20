/*
 * @Author: maggot-code
 * @Date: 2022-04-20 00:03:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-20 22:18:46
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router";
import { setupScroll } from "./support";

export default createRouter({
    scrollBehavior: setupScroll,
    history: createWebHashHistory(),
    routes: [],
    strict: false,
});