export interface DataTypeRegistry {}

export function fetchRecord<T extends keyof DataTypeRegistry, P extends T>(
  arg: T,
  data: `${P}_${number}`
): DataTypeRegistry[T] {
  return {} as any;
}
