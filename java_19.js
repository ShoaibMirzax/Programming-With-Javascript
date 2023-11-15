// OOP 
// "this" keyword? To refer to the object itself without specifying the object's name
// The Principles of OOP
// The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. 

// creating obbjects from classes 
// class Animal { /* ...class code here... */ }
// var myDog = Object.create(Animal)
// console.log (Animal)

// class Animal { /* ...class code here... */ }

// var myDog = new Animal()

// console.log (Animal)
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
      this.name = name;
      this.age = age;
      this.energy = energy;
    }
  
    sleep() {
      this.energy += 10;
    }
  
    doSomethingFun() {
      this.energy -= 10;
    }
  }
  
  // Task 2: Code a Worker class
  class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
      super(name, age, energy);
      this.xp = xp;
      this.hourlyWage = hourlyWage;
    }
  
    goToWork() {
      this.xp += 10;
    }
  }
  
  // Task 3: Code a intern object
  function createIntern() {
    const intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
  }
  
  // Task 4: Code a manager object
  function createManager() {
    const manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
  }
  
  // Testing
  const intern = createIntern();
  const manager = createManager();
  
  console.log("Intern:", intern);
  console.log("Manager:", manager);
  