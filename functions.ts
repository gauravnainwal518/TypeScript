//introduction to functions
function greet(name:string): string {
return `Hello, ${name}!`;
}

console.log(greet("Gaurav")); 

function multiply(a: number, b:number): number {
  return a * b;
}

console.log(multiply(5,4)); 



//Rest parameter
function sum(...nums: number[]): number {
  return nums.reduce((acc, val)=> acc + val, 0);
}

console.log(sum(10,20,30));
console.log(sum(1,2,3,4,5));

//function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): String;
function combine(a: any, b: any): any {
  return a + b; 
}

console.log(combine(5, 10));
console.log(combine("Type", "Script"));
