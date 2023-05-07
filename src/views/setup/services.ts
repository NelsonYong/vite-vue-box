import { request } from '@/network/axios'
import { ListType } from './data'

export function getList() {
  return request<ListType>('api/list', {
    method: 'GET'
  })
}
