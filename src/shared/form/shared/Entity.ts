/*
 * @FilePath: /Neon/src/shared/form/shared/Entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 17:03:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-17 17:28:13
 * @Description:
 */
import { Primary } from './Primary';

export class Entity {
    readonly entityId: Primary = Primary.create();

    public toEqualEntity(other?: Entity) {
        return this.entityId.toEqual(other?.entityId);
    }
}

export default Entity;
