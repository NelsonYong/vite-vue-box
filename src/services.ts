import { request } from '@/network/axios';
import { ResourcesType } from './pages/Home/data';

// 获取token
export async function getToken(params: { ticket: string }) {
  return request<{
    access_token: string;
  }>('/cas-qdama-cba/token', {
    params,
    headers: {
      'x-instance-header': 'QDM_BDAP',
    },
  });
}

export async function getUserInfo() {
  return request<API.Basic<API.CurrentUser>>('/api-user/v1/user/current');
}

// 记录查看
export function uploadView(resourceId: string) {
  return request<unknown>(`/api-screen/platform/user/record/view/${resourceId}`, {
    method: 'POST',
  });
}

// 收藏报告
export function uploadCollect(resouceId: string, collect: boolean) {
  return request<boolean>(`/api-screen/platform/user/collect/${resouceId}`, {
    method: 'POST',
    params: {
      collect,
    },
  });
}

// 获取是否收藏
export function getResourceCollected(resourceId: string) {
  return request<boolean>(`/api-screen/platform/user/getResourceCollected`, {
    params: {
      resourceId,
    },
  });
}

// 查询收藏或搜查报告
export function getListResources(params: {
  recommend?: boolean;
  collected?: boolean;
  resourceName?: string;
  search?: boolean;
}) {
  return request<ResourcesType[]>('/api-screen/platform/user/listResources', {
    params: {
      ...params,
      systemCode: 'bdap-mb',
    },
  });
}
