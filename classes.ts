class Quote {
  name: String;
  static castle: String = "Winterfell";
  saying: String;
  constructor(parameters: void) {
    this.saying = "winterfell";
  }

  hello(person: String) {
    console.log(`Hello ${person}`);
  }
}

var ned = new Quote();
ned.saying = "test";
console.log(Quote.castle);
ned.hello("Apep");
