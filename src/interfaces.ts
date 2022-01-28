interface Stark {
  name: String;
  age?: Number;
}

function printName(stark: Stark) {
  console.log(stark.name);
}

printName({ name: "apep" });
printName({ name: "afif" });
