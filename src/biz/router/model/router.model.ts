/*
 * @Author: maggot-code
 * @Date: 2022-03-29 13:58:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-29 14:29:05
 * @Description: file content
 */
import { defineStore } from 'pinia';

import { BizRouterType } from '../types';
import { setupState } from './router.entity';

const bizRouter: BizRouterType = defineStore("biz-router", {});

console.log(bizRouter);

export default setupState(bizRouter);