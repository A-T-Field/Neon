/*
 * @FilePath: /Neon/src/shared/form/Field/Field.entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 16:56:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-17 18:09:07
 * @Description:
 */
import type { Ref } from 'vue';
import { ref } from 'vue';
import { Entity } from '../shared/Entity';
import { FieldStatusEntity } from './FieldStatus.entity';

export class FieldEntity extends Entity {
    private readonly status: FieldStatusEntity;
    constructor() {
        super();
        this.status = FieldStatusEntity.create();
    }
}

export default FieldEntity;
