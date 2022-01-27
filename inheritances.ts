class Person {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  dance() {
    console.log(`${this.name} is dancing`);
  }
}

const Apep = new Person("Apep");
Apep.dance();

class OrdinaryPerson extends Person {
  dance() {
    console.log(`${this.name} are a Ordinary Person`);
    super.dance();
  }
}

const Afif = new OrdinaryPerson("Afif");
Afif.dance();
