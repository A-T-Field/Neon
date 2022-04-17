/*
 * @Author: maggot-code
 * @Date: 2022-04-17 14:42:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-17 14:47:57
 * @Description: file content
 */
export abstract class Handler {
    protected nextHandler!: Handler;
    public setNextHandler(handler: Handler): void {
        this.nextHandler = handler;
    }
    public abstract process(context: any): void;
}