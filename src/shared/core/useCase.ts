/*
 * @Author: maggot-code
 * @Date: 2022-04-08 16:26:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-08 16:26:17
 * @Description: file content
 */
export interface UseCase<IRequest, IResponse> {
    execute(request?: IRequest): Promise<IResponse> | IResponse;
}