/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:43:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 15:25:10
 * @Description: file content
 */
import { formatToDateTime } from '@/shared/utils/date';

const APP_NAME = import.meta.env.VITE_APP_SHORT_NAME;

export function infoLog(message: string) {
    console.log(`${formatToDateTime(Date.now())} [${APP_NAME} info]: ${message};`);
}

export function warnLog(message: string) {
    console.warn(`[${formatToDateTime(Date.now())} ${APP_NAME} warn]: ${message};`);
}

export function errorLog(message: string) {
    console.error(`[${formatToDateTime(Date.now())} ${APP_NAME} error]: ${message};`);
}