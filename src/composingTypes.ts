// 1. union type
type myBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const myboolean: myBool = true;
const windowstate: WindowStates = "minimized";
const lockstate: LockStates = "locked";
const positiveOddUnderTen: PositiveOddNumbersUnderTen = 3;
console.log(myboolean);
console.log(windowstate);
console.log(lockstate);
console.log(positiveOddUnderTen);

// 2. union types to define arrays containing multiple types
const person: (string | number | boolean)[] = ["Afif", 1, true];
person[0] = 100;

// 3. Tuples. A tuple is an array with fixed size and known datatypes.
// They are stricter than regular arrays.
const tuples: [string, number, boolean] = ["Afif", 1, true];
tuples[0] = "100"; // index 0 must be string

// 4. Objects
let objects: {
  name: string;
  location: string;
  isProgrammer: boolean;
};
// Assign person to an object with all the necessary properties and value types
objects = {
  name: "Afif",
  location: "UK",
  isProgrammer: true,
};
objects.isProgrammer = true;

// 5. generics
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;
interface BackpackInterface<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
alert();
const b: number = 1;
class Backpack<Type> implements BackpackInterface<Type> {
  declare prop: Type;
  constructor(parameters: void) {}
  add(obj: Type): void {
    this.prop = obj;
    console.log(this.prop);
  }

  get(): Type {
    return this.prop;
  }
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack1: Backpack<StringArray>;
declare const backpack2: Backpack<ObjectWithNameArray>;

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack1.add(["23"]);
backpack2.add([{ name: "afif" }]);

// object is a string, because we declared it above as the variable part of Backpack.
const object1 = backpack1.get();
const object2 = backpack2.get();
