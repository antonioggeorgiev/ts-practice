export type WrapForPenpal<T> = {
  [K in keyof T]: T[K] extends (...args: infer P extends unknown[]) => infer R
    ? (...args: P) => Promise<R>
    : never;
};
