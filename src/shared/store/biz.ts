/*
 * @Author: maggot-code
 * @Date: 2022-04-01 16:37:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 16:37:24
 * @Description: file content
 */
import StoreHouse from "@/shared/store";

const { setup, store } = StoreHouse.create();

export const setupBizStore = setup;
export const BizStore = store;