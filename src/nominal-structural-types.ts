// TS type system is structural

// “is type y equivalent to type x? —> “does the type of y fit within the type of x?

// static or dynamic type-checkign - wheather it is performed at compile time or not

// JS has dynamic type checking as it is performed at runtime
// TS has static type checking

// in nominal type systems we check if something is instance of something else
// in the structural type systems we check if they have similar structure

class Car {
  make: string;
  model: string;
  year: number;
  isElectric: boolean;
}

class Truck {
  make: string;
  model: string;
  year: number;
  towingCapacity: number;
}

const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
};

function printCar(car: { make: string; model: string; year: number }) {
  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar(new Car()); // Fine
printCar(new Truck()); // Fine
printCar(vehicle); // Fine
// three are fine since we the 3 of them have equivelent structure

// structural systems - “is type y equivalent to type x? —> “does the type of y fit within the type of x?
// nominal systems - “is type y equivalent to type x? —> “is the set represented by y a subset of the set representing x?
