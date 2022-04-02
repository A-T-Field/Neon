/*
 * @Author: maggot-code
 * @Date: 2022-04-01 17:58:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 18:03:54
 * @Description: file content
 */
import type { AppRouteMiddleware, BeforeContextHandler } from 'vue-router';

function setupFilter(mid: AppRouteMiddleware) {
    if (!mid) return false;

    const { use } = mid;

    return use;
}

function setupOrder(prev: AppRouteMiddleware, next: AppRouteMiddleware) {
    return prev.order - next.order;
}

function setupChain(mid: AppRouteMiddleware) {
    const { handler } = mid;
    return `then(${handler})`
}

export default () => {
    const gather = import.meta.globEager("./*.ts");
    const channel = Reflect.ownKeys(gather).map(key => {
        const middleware: AppRouteMiddleware = gather[key.toString()]?.default;

        return middleware;
    }).filter(setupFilter).sort(setupOrder).map(setupChain);
    const functionBody = channel.length <= 0 ? "" : `.${channel.join(".")}`;

    return new Function("context", `return (Promise.resolve(context)${functionBody})`) as BeforeContextHandler;
}