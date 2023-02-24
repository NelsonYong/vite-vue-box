declare namespace API {
  export type Basic<T> = {
    code: 0 | 1
    data?: T
    msg?: string
  }
}

declare type Recordable<T = any> = Record<string, T>
