/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
  TYPE = 'success'
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

export function resultSuccess<T = Recordable>(
  result: T,
  { message = 'ok' } = {}
) {
  return {
    code: ResultEnum.SUCCESS,
    data: result,
    message,
    type: 'success'
  }
}

export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(page, pageSize, list)

  return {
    ...resultSuccess({
      list: pageData,
      total: list.length
    }),
    message
  }
}

export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, result = null } = {}
) {
  return {
    code,
    data: result,
    message,
    type: 'error'
  }
}

export function pagination<T = any>(
  pageNo: number,
  pageSize: number,
  array: T[]
): T[] {
  const offset = (pageNo - 1) * Number(pageSize)
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize))
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({
  headers
}: requestParams): string | undefined {
  return headers?.authorization
}
