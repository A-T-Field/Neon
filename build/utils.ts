/*
 * @Author: maggot-code
 * @Date: 2022-03-26 23:51:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-03-27 13:27:55
 * @Description: file content
 */
export function isBuild(command: ViteCommand): boolean {
    return command === "build";
}
export function isServe(command: ViteCommand): boolean {
    return command === "serve";
}