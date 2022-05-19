// Constructor
class Person {
  constructor(name, age = 0) {
    this.name = name || "Anonymous";
    this.age = age;
  }
  getGreeting() {
    // Template string!!
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    // Template string!!
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// Inheritance
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription(){
      let description = super.getDescription();
      if (this.hasMajor()){
          description += ` Their major is ${this.major}`
      }
      return description;
  }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name, age);
      this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
      }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
  }

const me = new Traveler("Punmanat Nunthasunti", 23, "Thailand");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveler();
console.log(other);
console.log(other.getGreeting());