/*
 * @Author: maggot-code
 * @Date: 2022-04-08 16:03:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 16:37:05
 * @Description: file content
 */
import { uuidv4 } from '@/shared/utils/id';
import { Identifier } from './identifier';

type EntityIDType = string | number;

export class UniqueEntityID extends Identifier<EntityIDType> {
    constructor(id?: EntityIDType) {
        super(id ?? uuidv4());
    }
}