/*
 * @Author: maggot-code
 * @Date: 2022-03-31 16:08:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 11:09:33
 * @Description: file content
 */
import type {
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded
} from 'vue-router';
// import type { ResponsibilityChain } from 'types/chain';

export type NavigationErrorHandler<E = any> = (error: E, to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded) => E;

export class RouterWrap { }