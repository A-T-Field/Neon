/*
 * @FilePath: /Neon/src/shared/form/shared/Primary.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 16:57:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-17 17:11:39
 * @Description:
 */
import { uuidv4 } from '@neon-utils/id';

export type PrimaryValue = string | number;

export class Primary {
    readonly value: PrimaryValue;

    private constructor(value: PrimaryValue) {
        this.value = value;
    }

    public toEqual(other?: Primary) {
        return this.value === other?.value;
    }

    public static create(value?: PrimaryValue): Primary {
        return new Primary(value ?? uuidv4());
    }
}

export default Primary;
