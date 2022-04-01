/*
 * @Author: maggot-code
 * @Date: 2022-03-31 16:29:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-01 18:15:22
 * @Description: file content
 */
export abstract class ResponsibilityChain {
    private order: number;
    abstract name: string;
    abstract next(): Promise<any>;
    abstract handler(): void;
}