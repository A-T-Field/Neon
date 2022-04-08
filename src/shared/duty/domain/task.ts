/*
 * @Author: maggot-code
 * @Date: 2022-04-08 17:36:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 18:06:40
 * @Description: file content
 */
import { ValueObject } from '@/shared/core/valueObject';
import { Entity } from '@/shared/core/entity';

interface DutyTaskNameProps {
    value: string;
}
export class DutyTaskName extends ValueObject<DutyTaskNameProps> {
    get value() {
        return this.props.value;
    }
    private constructor(name: string) {
        super({
            value: name
        });
    }

    public static created(name: string) {
        return new DutyTaskName(name);
    }
}

interface DutyTaskProps {
    name: DutyTaskName;
}
export class DutyTask extends Entity<DutyTaskProps> {
    get name() {
        return this.props.name;
    }
    get nameValue() {
        return this.name.value;
    }
    private constructor(props: DutyTaskProps) {
        super(props);
    }

    public static created(props: DutyTaskProps) {
        return new DutyTask(props);
    }
}