import { request } from '@/network/axios'
import { NameType } from './data'

export async function getName(id: number) {
  return request<NameType>('request url', {
    params: {
      id
    }
  })
}
