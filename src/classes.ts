// access modifiers

// private fields presence checks
class Car {
  static #nextSerialNumber: number;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  make: string;
  model: string;
  year: number;
  #serialNumber = Car.#generateSerialNumber();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  equals(other: unknown) {
    if (other && typeof other === "object" && #serialNumber in other) {
      other;

      return (other.#serialNumber = this.#serialNumber);
    }
    return false;
  }
}

// readonly
class Car2 {
  static #nextSerialNumber: number;
  static #generateSerialNumber() {
    return this.#nextSerialNumber++;
  }

  public make: string;
  public model: string;
  public year: number;
  readonly #serialNumber = Car2.#generateSerialNumber();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  changeSerialNumber(num: number) {
    //@ts-expect-error
    this.#serialNumber = num;
  }
}

// param props
class Car3 {
  constructor(public make: string, public model: string, public year: number) {}
}

// overrides

class Car4 {
  honk() {}
  logHonk() {
    console.log("beep");
  }
}

class Truck extends Car4 {
  override honk() {
    console.log("BEEP");
  }
}
