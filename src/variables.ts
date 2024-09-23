let temp = 19; //type number
const humidity = 19; //type 19 - literal type
let temp2 = 20 as const; // same as let temp2: 20 = 20

//@ts-expect-error
temp2 = temp; // type error since only 6 instead of any other number can be assigned to temp2
temp = humidity; //  perfectly fine as { 6 } is subset of set of all numbers

// implicit any
let a;

// type casting
let frontEndMastersFounding = new Date("Jan 1, 2012");
let date1 = frontEndMastersFounding;

let date2 = frontEndMastersFounding as any; // force the type to be `any`

//explicit return value for functions
function add(a: number, b: number): number {
  return a + b;
}
