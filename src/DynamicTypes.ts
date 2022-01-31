// Using the any type, we can basically revert TypeScript back into JavaScript:

let age: any = "100";
age = 100;
age = {
  years: 100,
  months: 2,
};
