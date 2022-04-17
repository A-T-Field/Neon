/*
 * @Author: maggot-code
 * @Date: 2022-04-17 14:41:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-17 16:09:32
 * @Description: file content
 */
import { TaskNode } from './TaskNode';

export class AccessChain {
    private chaining: Map<string, TaskNode>;
    constructor() {
        this.chaining = new Map();
    }
    get size() {
        return this.chaining.size;
    }
    get isEmpty() {
        return this.chaining.size <= 0;
    }
}