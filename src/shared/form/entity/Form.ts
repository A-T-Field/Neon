/*
 * @FilePath: /Neon/src/shared/form/entity/Form.ts
 * @Author: maggot-code
 * @Date: 2022-07-10 01:16:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-10 01:24:22
 * @Description:
 */
import { DisplayType } from '../types';
import { Field } from './Field';

export type FormField = Record<string, Field>;

export type Form = {
    display: DisplayType;
    formField: FormField;
};
