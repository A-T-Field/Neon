/*
 * @Author: maggot-code
 * @Date: 2022-04-08 17:36:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 17:50:03
 * @Description: file content
 */
import { Entity } from '@/shared/core/entity';

interface DutyCollectProps { }
export class DutyCollect extends Entity<DutyCollectProps> {
    private constructor() {
        super({});
    }

    public static created() {
        return new DutyCollect();
    }
}