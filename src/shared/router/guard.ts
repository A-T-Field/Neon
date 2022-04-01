/*
 * @Author: maggot-code
 * @Date: 2022-04-01 09:45:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 11:03:21
 * @Description: file content
 */
import type {
    NavigationGuardWithThis,
    NavigationHookAfter,
} from 'vue-router';
import type { NavigationErrorHandler } from './types';

export const stupPredecessor: NavigationGuardWithThis<undefined> = async (to, from) => {
    console.log('before router');
}

export const setupSuccessor: NavigationHookAfter = (to, from, failure) => {
    console.log('after router');
}

export const setupScumbag: NavigationErrorHandler = (error, to, from) => {
    console.log('error router');
}