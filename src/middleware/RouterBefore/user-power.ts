/*
 * @Author: maggot-code
 * @Date: 2022-04-01 17:59:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 18:22:13
 * @Description: file content
 */
import type { AppRouteMiddleware, BeforeContextHandler } from 'vue-router';

const handler: BeforeContextHandler = (context) => {
    console.log('user power');

    return Promise.resolve({
        ...context,
        passto: true,
        body: ""
    });
}

export default {
    name: "user-power",
    order: 2,
    use: true,
    handler
} as AppRouteMiddleware;