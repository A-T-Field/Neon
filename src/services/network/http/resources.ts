/*
 * @Author: maggot-code
 * @Date: 2022-04-23 21:40:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-24 00:04:33
 * @Description: file content
 */
import { HttpCore } from "./core";

export class HttpSend {
    constructor(core: HttpCore) { }
}

export class HttpSendAll extends HttpSend {
    constructor(core: HttpCore) {
        super(core);
    }
}