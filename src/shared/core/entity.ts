/*
 * @Author: maggot-code
 * @Date: 2022-04-08 14:34:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 16:36:29
 * @Description: file content
 */
import { UniqueEntityID } from './uniqueEntityID';
import { isVoid } from '@/shared/utils/checkers';

const isEntity = (v: any): v is Entity<any> => {
    return v instanceof Entity;
}

export abstract class Entity<T> {
    protected readonly _id: UniqueEntityID;
    public readonly props: T;

    constructor(props: T, id?: UniqueEntityID) {
        this._id = id ?? new UniqueEntityID();
        this.props = props;
    }

    public equal(object?: Entity<T>): boolean {
        if (isVoid(object) || !isEntity(object)) return false;

        return this._id.equals(object._id);
    }
}