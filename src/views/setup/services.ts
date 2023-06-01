import { request } from '@/network/axios'
import { ListType } from './data'

export function getList({ id }: { id: number }) {
  return request<ListType>('api/list', {
    method: 'GET',
    params: { id }
  })
}
