// Define a function called circle that takes a diam variable of type number, and returns a string

// Using explicit typing
const circle_explicit: Function = (diam: number): string => {
  return "The circumference is " + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle_inferred = (diam: number) => {
  return "The circumference is " + Math.PI * diam;
};

// Normal function
function circle(diam: number): string {
  return "The circumference is " + Math.PI * diam;
}

console.log(circle_explicit(10));
console.log(circle_inferred(10));
console.log(circle(10));

// if function return void is mean returns nothing
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log("Hello " + name);
};

sayHello("Afif"); // Hello Danny
