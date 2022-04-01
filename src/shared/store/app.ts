/*
 * @Author: maggot-code
 * @Date: 2022-04-01 16:15:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 16:35:20
 * @Description: file content
 */
import StoreHouse from "@/shared/store";

const { setup, store } = StoreHouse.create();

export const setupAppStore = setup;
export const AppStore = store;