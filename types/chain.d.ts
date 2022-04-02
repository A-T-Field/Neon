/*
 * @Author: maggot-code
 * @Date: 2022-03-31 16:29:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-02 17:36:26
 * @Description: file content
 */
export type ResponsibilityHandler<C = any, R = any> = (context: C) => Promise<R>;
export abstract class ResponsibilityChain {
    abstract order: number;
    abstract name: string;
    abstract use: boolean;
    abstract handler: ResponsibilityHandler;
}