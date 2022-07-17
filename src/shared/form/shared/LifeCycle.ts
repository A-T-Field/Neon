/*
 * @FilePath: /Neon/src/shared/form/shared/LifeCycle.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 17:42:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-18 00:14:38
 * @Description:
 */
import type { Ref } from 'vue';
import { unref, ref } from 'vue';

export type StateBooleanProps = {
    state: boolean;
    validLabel: string;
    voidLabel: string;
};

export class StateBooleanEntity {
    private valueRef: Ref<boolean>;
    private props: StateBooleanProps;

    constructor(props: StateBooleanProps) {
        this.props = props;
        this.valueRef = ref(this.props.state);
    }

    get value(): boolean {
        return unref(this.valueRef);
    }
    get label(): string {
        const { validLabel, voidLabel } = this.props;
        return unref(this.valueRef) ? validLabel : voidLabel;
    }
    get compose() {
        return {
            value: this.value,
            label: this.label,
        };
    }

    private setState(state: boolean) {
        this.valueRef.value = state;
    }
    public toValid() {
        this.setState(true);
    }
    public toVoid() {
        this.setState(false);
    }
}

// 初始化状态
export class Initalized extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '已初始化',
            voidLabel: '未初始化',
        });
    }
    public static of(state?: boolean) {
        return new Initalized(state ?? false);
    }
}

// 挂载状态
export class Mounted extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '已挂载',
            voidLabel: '未挂载',
        });
    }
    public static of(state?: boolean) {
        return new Mounted(state ?? false);
    }
}

// 卸载状态
export class Unmounted extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '已卸载',
            voidLabel: '未卸载',
        });
    }
    public static of(state?: boolean) {
        return new Unmounted(state ?? false);
    }
}

// 加载状态
export class Loading extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '加载中',
            voidLabel: '未加载',
        });
    }
    public static of(state?: boolean) {
        return new Loading(state ?? false);
    }
}

// 校验状态
export class Validating extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '校验中',
            voidLabel: '未校验',
        });
    }
    public static of(state?: boolean) {
        return new Validating(state ?? false);
    }
}

// 激活状态
export class Activated extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '已激活',
            voidLabel: '未激活',
        });
    }
    public static of(state?: boolean) {
        return new Activated(state ?? false);
    }
}

// 浏览状态
export class Visited extends StateBooleanEntity {
    private constructor(state: boolean) {
        super({
            state,
            validLabel: '已浏览',
            voidLabel: '未浏览',
        });
    }
    public static of(state?: boolean) {
        return new Visited(state ?? false);
    }
}
