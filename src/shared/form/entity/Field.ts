import { DisplayType } from '../types';
import { Primary } from './Primary';

export type FieldType =
    | 'void'
    | 'string'
    | 'number'
    | 'boolean'
    | 'date'
    | 'object'
    | 'array';

export type FieldValue<FieldValueType extends object = any> =
    | FieldValueType
    | any;

export type Field = {
    display: DisplayType;
    key: Primary;
    type: FieldType;
    value: FieldValue;
    field: string;
};
