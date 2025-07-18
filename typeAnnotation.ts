// variable annotation
let rollno: number = 5;
//number = "five"; this is wrong shows error 

//function annotation
function greeting(name: string): string {
  return "hello" + name;
}

console.log(greeting("gaurav"));

//console.log(greeting(123)); this is wrong this shows error

//arrow function example
const add = (a:number, b:number): number => {
  return a+b;
}

