/*
 * @Author: maggot-code
 * @Date: 2022-05-08 17:04:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-05-08 17:06:11
 * @Description: file content
 */
export function setupValidateStatus(httpStatusCode: number) {
    return httpStatusCode >= 200 && httpStatusCode < 300;
}