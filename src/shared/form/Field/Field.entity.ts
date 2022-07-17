/*
 * @FilePath: /Neon/src/shared/form/Field/Field.entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-17 16:56:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-18 00:59:30
 * @Description:
 */
import { Entity } from '../shared/Entity';
import {
    Initalized,
    Mounted,
    Unmounted,
    Loading,
    Validating,
    Activated,
    Visited,
} from '../shared/LifeCycle';

export class FieldEntity<ValueType = any> extends Entity {
    protected initalizedState!: Initalized;
    protected mountedState!: Mounted;
    protected unmountedState!: Unmounted;
    protected loadingState!: Loading;
    protected validatingState!: Validating;
    protected activatedState!: Activated;
    protected visitedState!: Visited;

    protected value!: ValueType;
    protected defaultValue!: ValueType;
    protected initialValue!: ValueType;
    constructor() {
        super();
        this.setupFieldState();
    }
    protected setupFieldState() {
        this.initalizedState = Initalized.of(false);
        this.mountedState = Mounted.of(false);
        this.unmountedState = Unmounted.of(false);
        this.loadingState = Loading.of(false);
        this.validatingState = Validating.of(false);
        this.activatedState = Activated.of(false);
        this.visitedState = Visited.of(false);
    }
}

export default FieldEntity;
