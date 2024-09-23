type Phones = {
  [key: string]: {
    country: string;
    area: string;
    number: string;
  };
};
const phones: Phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
};

// tuples with element position meaning something
let myCar = [2002, "Toyota", "Corolla"];
// every prop is string or number, TS makes safe assumption of the ty[e]
const [year, make, model] = myCar;

// if we want tuple with fixed values we need explicitly to set the type
let myCar2: [number, string, string] = [2002, "Toyota", "Corolla"];
// proper types for each element
const [year2, make2, model2] = myCar2;

// readonly tuples

// not a readonly tuple, can be mutated
const numPair: [number, number] = [4, 5];
numPair.push(3);
numPair.length; // has type of 2, which might be miselading

// actual readonly typle
const numTriplet: readonly [number, number, number] = [4, 5, 6];
// we receive error on the push operation
//@ts-expect-error
numTriplet.push(3);
