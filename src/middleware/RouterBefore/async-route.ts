/*
 * @Author: maggot-code
 * @Date: 2022-04-02 10:33:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 18:22:01
 * @Description: file content
 */
import type { AppRouteMiddleware, BeforeContextHandler } from 'vue-router';

const handler: BeforeContextHandler = (context) => {
    console.log('async route');

    return Promise.resolve({
        ...context,
        passto: true,
        body: ""
    });
}

export default {
    name: "async-route",
    order: 1,
    use: true,
    handler
} as AppRouteMiddleware;