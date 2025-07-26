

// 1) Introduction to Classes & Objects
class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  displayDetails() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model S");
car1.displayDetails();

// 2) Fundamentals of Classes & Objects
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John", 30);
person1.greet();

// 3) Constructor
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${rect.getArea()}`);

// 4) this keyword
class Counter {
  count: number = 0;

  increment() {
    this.count++;
    console.log(`Count: ${this.count}`);
  }
}

const counter = new Counter();
counter.increment();
counter.increment();

// 5) Public & Private Access Modifiers
class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount}, new balance = ${this.balance}`);
  }

  getBalance() {
    return this.balance;
  }
}

const acc1 = new BankAccount("Alice", 1000);
acc1.deposit(500);
console.log(`Balance: ${acc1.getBalance()}`);

// 6) Protected Access Modifier
class EmployeeClass {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends EmployeeClass {
  showSalary() {
    console.log(`Manager Salary: ${this.salary}`);
  }
}

const manager = new Manager(50000);
manager.showSalary();

// 7) Optional Properties
class Product {
  constructor(public name: string, public price?: number) {}
}

const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mouse");
console.log(product1, product2);

// 8) Parameter Properties
class Student {
  constructor(public name: string, private age: number) {}
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  }
}

const s1 = new Student("Gaurav", 22);
console.log(s1.getDetails());

// 9) Getters & Setters
class Account {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount >= 0) this._balance = amount;
    else console.log("Invalid balance amount");
  }
}

const acc2 = new Account();
acc2.balance = 1000;
console.log(acc2.balance);

// 10) Static Members
class Calculator {
  static PI = 3.14159;
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(`PI = ${Calculator.PI}`);
console.log(`Sum = ${Calculator.add(5, 7)}`);

// 11) Abstract Classes
abstract class Shape {
  abstract getArea(): number;
  display() {
    console.log("Displaying Shape");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
circle.display();
console.log(`Circle Area: ${circle.getArea()}`);
