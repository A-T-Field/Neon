/*
 * @Author: maggot-code
 * @Date: 2022-03-26 23:34:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-23 18:16:32
 * @Description: file content
 */
declare type Nullable<T> = T | null;

declare type Recordable<T = any> = Record<string, T>;

declare type DeepRequired<T> = {
    [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
}

declare type ViteCommand = 'build' | 'serve';
