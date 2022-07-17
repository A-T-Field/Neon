/*
 * @FilePath: /Neon/src/shared/form/Field/FieldStatus.entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 17:22:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-17 18:08:10
 * @Description:
 */
import { Entity } from '../shared/Entity';
import { Initalized } from '../shared/LifeCycle';

export class FieldStatusEntity extends Entity {
    private constructor() {
        super();
    }

    public static create(): FieldStatusEntity {
        return new FieldStatusEntity();
    }
}

export default FieldStatusEntity;
