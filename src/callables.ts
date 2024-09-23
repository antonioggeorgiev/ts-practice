interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

// type a, b, x, y are inferred as numbers
const add: TwoNumberCalculation = (a, b) => a + b;
const subtract: TwoNumberCalc = (x, y) => x - y;

// void
function printFormattedJSON(obj: string[]) {
  console.log(JSON.stringify(obj, null, "  "));
}
// x type is void
const x = printFormattedJSON(["hello", "world"]);

// void is a special type, that’s specifically used to describe function return values. It has the following meaning:
// The return value of a void-returning function is intended to be ignored

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
//@ts-expect-error
invokeInFourSeconds(() => values.push(4)); // Type 'number' is not assignable to type 'undefined'.
invokeInFiveSeconds(() => values.push(4));

// Construct signatures
//similar to functions but describe the behavior of new
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor(1697923072611);

// function overload
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

// const myFrame: HTMLIFrameElement
const myFrame = document.getElementsByTagName("iframe")[0];

// (parameter) val: any
handleMainEvent(myFrame, (val: unknown) => {});

// we need to specify that for HTMLFormElement we have FormSubmitHandler
// and for HTMLIFrameElement we have MessageHandler

function handleMainEvent2(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
): void;
function handleMainEvent2(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void;
function handleMainEvent2(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
): void {}
const myForm = document.getElementsByTagName("form")[0];

handleMainEvent2(myFrame, (val: unknown) => {
  // function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler): any (+1 overload)
});
handleMainEvent2(myFrame, (val: unknown) => {
  // function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler): any (+1 overload)
});

// explicitly define return types
// we can add first argugment - this in a function to pass the this to it
