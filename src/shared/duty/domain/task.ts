/*
 * @Author: maggot-code
 * @Date: 2022-04-08 17:36:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-09 19:25:10
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
    order?: number;
    handler?: (body: any) => Promise<any> | any;
}
export class DutyTask extends Entity<DutyTaskProps> {
    get name() {
        return this.props.name;
    }
    get order() {
        return this.props?.order ?? 0;
    }
    get handler() {
        return this.props?.handler ?? this.defaultHandler;
    }
    private constructor(props: DutyTaskProps) {
        super(props);
    }
    private defaultHandler = (body: any) => Promise.resolve(body);

    public static created(props: DutyTaskProps) {
        return new DutyTask(props);
    }
}