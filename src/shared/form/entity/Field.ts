/*
 * @FilePath: /Neon/src/shared/form/entity/Field.ts
 * @Author: maggot-code
 * @Date: 2022-07-12 22:50:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-12 22:52:45
 * @Description:
 */
import { Primary } from './Primary';

export type FieldProps = {};

export class Field {
    protected key: Primary;
    protected props: FieldProps;
    constructor(props: FieldProps) {
        this.key = Primary.of();
        this.props = props;
    }
}

export default Field;
