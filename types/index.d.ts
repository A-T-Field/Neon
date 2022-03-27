/*
 * @Author: maggot-code
 * @Date: 2022-03-26 23:34:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 14:33:44
 * @Description: file content
 */
declare type Nullable<T> = T | null;

declare type Recordable<T = any> = Record<string, T>;

declare type ViteCommand = "build" | "serve";