/*
 * @Author: maggot-code
 * @Date: 2022-03-31 16:29:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 11:09:19
 * @Description: file content
 */
export abstract class ResponsibilityChain {
    abstract next(): void;
    abstract handler(): Promise<any>;
}