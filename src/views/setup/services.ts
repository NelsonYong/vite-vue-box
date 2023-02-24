import { request } from '@/network/axios'
import { ListType } from './data'

export async function getList() {
  return request<ListType>('api/list')
}
