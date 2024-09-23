// value is Type

interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: any;

// the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string" &&
    "year" in valueToTest &&
    typeof valueToTest["year"] === "number"
  );
}

if (isCarLike(maybeCar)) {
  // type CarLike
  maybeCar;
}

function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

maybeCar;

assertsIsCarLike(maybeCar);
// type CarLike
maybeCar;

// satisfies gives more infro about the type on hover
type DateLike = Date | number | string;

type Holidays = {
  [k: string]: DateLike;
};

const usHolidays = {
  independenceDay: "July 4, 2024",
  memorialDay: new Date("May 27, 2024"),
  laborDay: 1725260400000, // September 2, 2024
} satisfies Holidays;

usHolidays;
