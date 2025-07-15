let myAge: number = 22;
let myName: string = "Gaurav";
let isLoggedIn: boolean = true;
let data: any = "Hello";

let marks: number[] = [90, 80, 70];
let person: [string, number] = ["Gaurav", 22];

enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Left;

let u: undefined = undefined;
let n: null = null;

console.log("myAge:", myAge);
console.log("myName:", myName);
console.log("Logged In:", isLoggedIn);
console.log("Data:", data);
console.log("Marks:", marks);
console.log("Person:", person);
console.log("Direction:", move);
console.log("Undefined:", u);
console.log("Null:", n);

//imp points 
//If you're building a project with multiple files, wrap each file as a module by exporting or importing something. Example:
// At the bottom of basicTypes.ts
export {}; // makes this file a module
//This tells TypeScript: "This file is isolated; don’t merge global variables."

