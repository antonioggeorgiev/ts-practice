import { WrapForPenpal } from "./testWebWorker";

let methods = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
};

//@ts-expect-error
methods.add(1, 2).then();
const asyncMethods: WrapForPenpal<typeof methods> = {} as any;
asyncMethods.add(1, 2).then;
