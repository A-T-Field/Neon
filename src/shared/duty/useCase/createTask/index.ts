/*
 * @Author: maggot-code
 * @Date: 2022-04-09 19:25:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-04-10 22:08:21
 * @Description: file content
 */
import { UseCase } from '@/shared/core/useCase';
import {
    DutyTaskName,
    DutyTask
} from '../../domain/task';

export class CreateTask implements UseCase<any, any> {

    execute(request?: any) {
        throw new Error('Method not implemented.');
    }
}