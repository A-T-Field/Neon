/*
 * @FilePath: \Neon\src\shared\form\Usecase.ts
 * @Author: maggot-code
 * @Date: 2022-07-19 17:28:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-19 17:32:52
 * @Description:
 */
import { Ref, unref, ref } from 'vue';

export abstract class BooleanValueObject {
    value!: Ref<boolean>;
    setupValue!: (val: boolean) => void;
}

export function useBooleanValueObject(
    vok: string,
    state?: boolean
): BooleanValueObject {
    const valueRef = ref(state ?? false);

    function setupValue(val: boolean): void {
        valueRef.value = val;
    }

    return {
        value: valueRef,
        setupValue,
    };
}
