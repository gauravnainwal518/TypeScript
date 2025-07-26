// --- Generic Function ---
function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(42));
console.log(identity("Hello Generics"));

// --- Generic Array Function ---
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
console.log(getFirstElement<number>([10, 20, 30]));
console.log(getFirstElement<string>(["A", "B", "C"]));

// --- Generic Interface ---
interface Box<T> {
    value: T;
}
let numberBox: Box<number> = { value: 123 };
let stringBox: Box<string> = { value: "TypeScript" };
console.log(numberBox.value);
console.log(stringBox.value);

// --- Generic Class ---
class DataHolder<T> {
    private data: T;
    constructor(value: T) {
        this.data = value;
    }
    getData(): T {
        return this.data;
    }
}
const numberData = new DataHolder<number>(500);
console.log(numberData.getData());
const stringData = new DataHolder<string>("Generic Class Example");
console.log(stringData.getData());

// --- Generic Constraint Example ---
function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}
logLength("Hello World");
logLength([1, 2, 3, 4]);
