let anything: any = 10;
anything = "Test";

let userInput: unknown = 50;

function showAlert(): void {
  alert("This is a message");
}

function fail(): never {
  throw new Error("Fail function");
}
