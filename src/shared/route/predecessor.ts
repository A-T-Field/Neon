/*
 * @Author: maggot-code
 * @Date: 2022-04-01 17:13:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 18:04:51
 * @Description: file content
 */
import type { NavigationGuardWithThis } from 'vue-router';

import BeforeMiddleware from '@/middleware/RouterBefore';

BeforeMiddleware();

export const stupPredecessor: NavigationGuardWithThis<any> = (to, from) => {
    return true;
}