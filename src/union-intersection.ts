type Evens = 2 | 4 | 6 | 8;
type OneThroughFive = 1 | 2 | 3 | 4 | 5;
type OneThroughFiveOrEvens = OneThroughFive | Evens; // { 1, 2, 3, 4, 5, 6, 8 }
type OneThroughFiveAndEvens = Evens & OneThroughFive; // { 2, 4 }

function flipCoin() {
  if (Math.random() > 0.5) return "heads"; // the "heads" branch
  return "tails"; // the "tails" branch
}

// outcome type is "tails" or "heads"
const outcome = flipCoin();

// as const // specified that we want the literal value
const success = [
  "success",
  { name: "Mike North", email: "mike@example.com" },
] as const;
const fail = ["error", new Error("Something went wrong!")] as const;

function maybeGetUserInfo() {
  if (flipCoin() === "heads") {
    return success;
  } else {
    return fail;
  }
}

// the type:
const outcome2 = maybeGetUserInfo();

const [first, second] = outcome2;
//"success" | "error"
first;
// {
//     readonly name: "Mike North";
//     readonly email: "mike@example.com";
// } | Error
second;

// for the second value we do not get any suggestions beside the fields that are in both Error and custom type
// which is name

// *Essentially, | means “anything in either set” in terms of the allowed values, and because of this only the behavior that’s definitely present on
// every member of both sets is available to us

if (first === "error") {
  second; // type Error
} else {
  first; // type "success"
  second; // custom type
}

if (second instanceof Error) {
  first; // "success" | "error"
  second; // type Error
} else {
  first; // "success" | "error"
  second; // custom type
}

if (outcome2[1] instanceof Error) {
  outcome2[0]; // "success" | "error"
  outcome2[1]; // type Error | custom type
} else {
  outcome2[0]; // "success" | "error"
  outcome2[1]; //  type Error | custom type
}
