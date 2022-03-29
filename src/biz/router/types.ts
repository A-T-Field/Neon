/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:57:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:13:21
 * @Description: file content
 */
import type { StoreDefinition } from 'pinia';

export interface IBizRouterState {
    hasRequest: boolean;
    isCache: boolean;
    isMount: boolean;
    isBad: boolean;
}

export type BizRouterType = StoreDefinition<string, IBizRouterState>;