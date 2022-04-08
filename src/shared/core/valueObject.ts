/*
 * @Author: maggot-code
 * @Date: 2022-04-08 14:45:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 14:48:52
 * @Description: file content
 */
import { isVoid } from '@/shared/utils/checkers';

interface ValueObjectProps {
    [key: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps>{
    public readonly props: T;

    constructor(props: T) {
        this.props = Object.freeze(props);
    }

    public equals(vo?: ValueObject<T>): boolean {
        if (isVoid(vo) || isVoid(vo?.props)) return false;

        return this.props === vo?.props;
    }
}