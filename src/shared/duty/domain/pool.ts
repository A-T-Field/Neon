/*
 * @Author: maggot-code
 * @Date: 2022-04-08 17:36:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-09 19:15:22
 * @Description: file content
 */
import { Entity } from '@/shared/core/entity';
import { DutyTaskName, DutyTask } from './task';

interface DutyPoolProps {
    pool: Map<DutyTaskName, DutyTask>;
}
export class DutyPool extends Entity<DutyPoolProps> {
    get pool() {
        return this.props.pool;
    }
    get cap(): number {
        return this.pool.size;
    }
    get isEmpty(): boolean {
        return this.cap <= 0;
    }

    private constructor(props: DutyPoolProps) {
        super(props);
    }

    public setupTask(task: DutyTask) {
        this.pool.set(task.name, task);
    }
    public static created(props: DutyPoolProps) {
        return new DutyPool(props);
    }
}