/*
 * @Author: maggot-code
 * @Date: 2022-04-05 15:59:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-05 15:59:52
 * @Description: file content
 */
import { defineStore } from 'pinia';
import { store } from "@/shared/store";

export interface IUseRouteStore { }

export const useRouteStore = defineStore("routeStore", {
    state: (): IUseRouteStore => ({})
});

export const useRouteStoreWithout = () => {
    return useRouteStore(store);
}