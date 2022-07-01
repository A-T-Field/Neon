/*
 * @FilePath: \Neon\src\infra\utils\parse\tokens.ts
 * @Author: maggot-code
 * @Date: 2022-07-01 12:40:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-01 12:47:04
 * @Description:
 */
// @ 方法标识符
export const functionTok = '@';

// $ 变量标识符
export const variableTok = '$';

// , 变量分隔符
export const variableSeparatorTok = ',';

// . 对象分隔符
export const objectSeparatorTok = '.';

// : 成员属性分隔符
export const memberSeparatorTok = ':';

// ( 参数起始分隔符
export const parameterStartTok = '(';

// ) 参数闭合分隔符
export const parameterEndTok = ')';

// [ 索引起始分隔符
export const indexStartTok = '[';

// ] 索引闭合分隔符
export const indexEndTok = ']';

// { 对象起始分隔符
export const objectStartTok = '{';

// } 对象闭合分隔符
export const objectEndTok = '}';

// {{ 模板起始分隔符
export const templateStartTok = '{{';

// }} 模板闭合分隔符
export const templateEndTok = '}}';

// ; 结尾分隔符
export const endTok = ';';
