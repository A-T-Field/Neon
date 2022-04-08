/*
 * @Author: maggot-code
 * @Date: 2022-04-08 17:36:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 17:51:18
 * @Description: file content
 */
import { Entity } from '@/shared/core/entity';

interface DutyDispatchProps { }
export class DutyDispatch extends Entity<DutyDispatchProps> {
    private constructor() {
        super({});
    }

    public static created() {
        return new DutyDispatch();
    }
}