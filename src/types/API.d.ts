declare namespace API {
  export type Basic<T> = {
    code: 0 | 1;
    data?: T;
    msg?: string;
  };
}
