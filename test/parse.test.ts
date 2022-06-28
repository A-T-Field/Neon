/*
 * @FilePath: \Neon\test\parse.test.ts
 * @Author: maggot-code
 * @Date: 2022-06-28 13:56:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-28 14:06:55
 * @Description:
 */
import { describe, expect, it } from 'vitest';
import { toParse } from '@neon/infra/utils/parse';

describe('expect', () => {
    it('parse', () => {
        expect(toParse).toMatchInlineSnapshot(``);
    });
});
