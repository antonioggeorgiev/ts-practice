// both expressions are the same
type SpecialDateTypeAlias = Date & { getDescription: () => string };

interface SpecialDateInterface extends Date {
  getDescription: () => string;
}

// differences
// interface cannot hold non object value and type aliases can
type NumberFive = 5;

// interfaces are open
interface Test {
  a: number;
}
interface Test {
  b: number;
}
let a: Test = {
  a: 5,
  b: 5,
};

// Inheritance
interface Animal {
  isAlive(): boolean;
}
interface Mammal extends Animal {
  getFurOrHairColor(): string;
}
interface Hamster extends Mammal {
  squeak(): string;
}
function careForHamster(h: Hamster) {
  h.getFurOrHairColor();

  h.squeak();
}

// class cannot extend interface, it can implement it
// interface cannot implement interface, it can extend it
// class cannot implement class, it can extends it
// multiple inheritance not supported

// type alias can be implemented but it has to be object like
type Number5 = 5;
type ObjectCustom = {};

class A implements ObjectCustom {} // fine

// class B implements Number5 {} error

// If you need to define something other than an object type (e.g., use of the | union type operator), you must use a type alias
// If you need to define a type to use with the implements heritage term on a class, use an interface
// If you need to allow consumers of your types to augment them, you must use an interface.
