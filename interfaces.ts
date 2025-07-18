//interfaces(for object structure)
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: User = {
  name: "Gaurav",
  age: 22,
  isActive: true
};

//Type Alias (Alternative to interface):
type Employee = {
  id: number;
  department: string;
};

const emp1: Employee = {
  id: 101,
  department: "IT"
};

console.log(user1);
