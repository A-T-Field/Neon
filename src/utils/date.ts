/*
 * @Author: maggot-code
 * @Date: 2022-03-28 16:41:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-28 16:41:48
 * @Description: file content
 */
import { format } from 'date-fns';

const DATE_TIME_FORMAT: string = "yyyy-MM-dd HH:mm:ss";
const DATE_FORMAT: string = "yyyy-MM-dd";

export function formatToDateTime(date: number | Date, formatStr: string = DATE_TIME_FORMAT): string {
    return format(date, formatStr);
}

export function formatToDate(date: number | Date, formatStr: string = DATE_FORMAT): string {
    return format(date, formatStr);
}