// keyof

type DatePropertyNames = keyof Date;

type DateStringPropertyNames = DatePropertyNames & string;

type DateSymbolPropertyNames = DatePropertyNames & symbol;

// typeof

async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
  ]);

  // type: [Response, string]
  type ApiResponseType = typeof apiResponse;
}

class A {
  constructor() {}
  static testProp = "test";
  test = () => console.log(1);
}

const AConstructor = A;
AConstructor.testProp;

// AConstructor, the class (constructor) is of type typeof A, where instances are of type A

interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car["color"];
let carColorRedComponent: Car["color"]["red"];
let carProperty: Car["color" | "year"];
