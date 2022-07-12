/*
 * @FilePath: /Neon/src/shared/form/entity/Primary.ts
 * @Author: maggot-code
 * @Date: 2022-07-12 22:43:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-12 22:49:01
 * @Description:
 */
import { uuidv4 } from '@neon-utils/id';

export type PrimaryID = string | number;

export class Primary {
    protected value: PrimaryID;
    private constructor(value: PrimaryID) {
        this.value = value;
    }
    get id(): PrimaryID {
        return this.value;
    }
    toEqual(other: Primary) {
        return this.value === other.value;
    }
    static of(value?: PrimaryID) {
        const val = value ?? uuidv4();
        return new Primary(val);
    }
}

export default Primary;
