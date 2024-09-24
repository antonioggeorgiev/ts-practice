type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type CustomReadonly<T> = {
  readonly [P in keyof T]: T;
};

type TupleToObject<T extends readonly PropertyKey[]> = {
  [Key in T[number]]: Key;
};

type FirstOfArray<T extends unknown[]> = T[0];

type LengthOfTyple<T extends readonly unknown[]> = T["length"];

type CustomExclude<T, U> = T extends U ? never : T;

type Awaited<T> = T extends Promise<infer R> ? R : never;

type If<B extends boolean, P, K> = B extends true ? P : K;

type Concat<P extends unknown[], Q extends unknown[]> = [...P, ...Q];

type Includes<P extends unknown[], Q> = Q extends P[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "dw">;

type Push<P extends unknown[], Q> = [...P, Q];

type Unshift<P extends unknown[], Q> = [Q, ...P];
