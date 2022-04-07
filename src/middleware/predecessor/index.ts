/*
 * @Author: maggot-code
 * @Date: 2022-04-07 15:36:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-07 16:54:16
 * @Description: file content
 */
import type { NavigationGuardWithThis } from 'vue-router';

import {
    LowercallSupport,
    Lowercall
} from '@/shared/utils/lower-call';

const beforeEachUse = (node) => {
    return node;
}
const beforeEach: LowercallSupport = {
    task: [],
    use: beforeEachUse
};
const lowercall = Lowercall
    .create(beforeEach)
    .install(import.meta.globEager("./*.ts"));

console.log(lowercall);

export const setupPredecessor: NavigationGuardWithThis<any> = async (to, from) => {
    const result = await lowercall.dispatch({ to, from });
    console.log(result);

    return true;
}