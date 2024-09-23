export interface DataTypeRegistry {}

export function fetchRecord<T extends keyof DataTypeRegistry>(
  arg: T,
  data: `${T}_${number}`
) {}
