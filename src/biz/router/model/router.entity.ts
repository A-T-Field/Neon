/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:58:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:15:11
 * @Description: file content
 */
import { BizRouterType, IBizRouterState } from '../types';

const bizRouterState: IBizRouterState = {
    hasRequest: false,
    isCache: false,
    isMount: false,
    isBad: false
};

export function setupState(useStore: BizRouterType) {
    const store = useStore();

    store.$state = bizRouterState;

    return store;
}