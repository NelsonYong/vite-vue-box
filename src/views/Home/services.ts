import { request } from '@/network/axios';
import { NameType } from './data';

/**
 *
 * @param id 是一个数字类型，代表用户id
 * @returns 返回用户的姓名和年龄
 */
export async function getName(id: number) {
  return request<NameType>('request url', {
    params: {
      id,
    },
  });
}
