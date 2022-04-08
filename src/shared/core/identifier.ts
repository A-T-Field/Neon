/*
 * @Author: maggot-code
 * @Date: 2022-04-08 16:20:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 16:23:41
 * @Description: file content
 */
import { isVoid, toString } from '@/shared/utils/checkers';

export class Identifier<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public equals(id?: Identifier<T>): boolean {
        if (isVoid(id) || !(id instanceof this.constructor)) return false;

        return id.toValue() === this.value;
    }

    public toString() {
        return toString(this.value);
    }

    public toValue(): T {
        return this.value;
    }
}