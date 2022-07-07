/*
 * @FilePath: /Neon/src/services/form/entity/PrimaryKey.ts
 * @Author: maggot-code
 * @Date: 2022-07-07 23:29:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-07 23:48:09
 * @Description:
 */
export type PrimaryID = string | number;

export class PrimaryKey {
    private _id: PrimaryID;

    private constructor(id: PrimaryID) {
        this._id = id;
    }

    get id(): PrimaryID {
        return this._id;
    }

    toEquals(other: PrimaryKey): boolean {
        return this._id === other.id;
    }

    static Setup(id: PrimaryID): PrimaryKey {
        return new PrimaryKey(id);
    }
}
