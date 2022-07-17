/*
 * @FilePath: /Neon/src/shared/form/Form/Form.entity.ts
 * @Author: maggot-code
 * @Date: 2022-07-18 00:36:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-18 00:48:01
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

export class FormEntity extends Entity {
    public initalizedState!: Initalized;
    public mountedState!: Mounted;
    public unmountedState!: Unmounted;
    public loadingState!: Loading;
    public validatingState!: Validating;
    public activatedState!: Activated;
    public visitedState!: Visited;
    constructor() {
        super();
        this.setupFormState();
    }
    protected setupFormState() {
        this.initalizedState = Initalized.of(false);
        this.mountedState = Mounted.of(false);
        this.unmountedState = Unmounted.of(false);
        this.loadingState = Loading.of(false);
        this.validatingState = Validating.of(false);
        this.activatedState = Activated.of(false);
        this.visitedState = Visited.of(false);
    }
}

export default FormEntity;
