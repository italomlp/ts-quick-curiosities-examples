interface IPet {
  name: string;
  age: number;
  speak: () => string;
}

interface IDog extends IPet {
  breed: string;
}

abstract class Pet implements IPet {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract speak(): string;
}

class Dog extends Pet implements IDog {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    return 'Woof!';
  }
}

const bob: IDog = new Dog('Bob', 3, 'Poodle');
console.log(bob.speak());

console.log(bob.breed);
