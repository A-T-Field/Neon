/*
 * @FilePath: /Neon/src/shared/form/shared/LifeCycle.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 17:42:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-17 18:27:19
 * @Description:
 */
import type { Ref } from 'vue';
import { unref, ref } from 'vue';

export type StateBooleanProps = {
    validLabel: string;
    invalidLabel: string;
};

export class StateBooleanHook {
    private valueRef: Ref<boolean>;
    private props: StateBooleanProps;

    constructor(state: boolean, props: StateBooleanProps) {
        this.valueRef = ref(state);
        this.props = props;
    }

    get stateValue(): boolean {
        return unref(this.valueRef);
    }
    get stateLabel(): string {
        return unref(this.valueRef)
            ? this.props.validLabel
            : this.props.invalidLabel;
    }
    get stateCompose() {
        return {
            label: this.stateLabel,
            value: this.stateValue,
        };
    }

    private setState(state: boolean) {
        this.valueRef.value = state;
    }

    public toValid() {
        this.setState(true);
    }
    public toInvalid() {
        this.setState(false);
    }
}

export class Initalized extends StateBooleanHook {
    private constructor(state: boolean) {
        super(state, {
            validLabel: '已初始化',
            invalidLabel: '未初始化',
        });
    }

    public setupInitalized(state: boolean) {
        state ? this.toValid() : this.toInvalid();
    }
}
