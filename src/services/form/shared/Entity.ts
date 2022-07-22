/*
 * @FilePath: \Neon\src\services\form\shared\Entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-22 14:54:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-22 14:56:47
 * @Description:
 */
export type EntityKey = string | number;

export interface IEntity {
    value: EntityKey;
    tobeEqual: (other: IEntity) => boolean;
}
