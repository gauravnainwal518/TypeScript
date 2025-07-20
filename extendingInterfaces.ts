// extendingInterfaces.ts

interface Animal {
  name: string;
  sound: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  sound: "Bark",
  breed: "Labrador"
};

console.log(`${myDog.name} says ${myDog.sound} and is a ${myDog.breed}`);


//multiple interface 
interface BasicInfo{
  id:  number;
  name: string;
}

interface Contact{
  email: string;
  phone: string;
}

interface user extends BasicInfo, Contact{
  isAdmin: boolean;
}

const adminUser: user = {
  id: 1,
  name: "Gaurav",
  email: "gaurav@example.com",
  phone: "1234567890",
  isAdmin: true
};

console.log(adminUser);


//practice task 
interface Person{
  name: string;
  age: number;
}

interface Academics{
  school: string;
  grade: string;
}

interface Student extends Person, Academics{
  rollNumber: number;
}

const Studnet1: Student={
 
  name: "Riya",
  age: 17,
  school: "ABC Public School",
  grade: "11th",
  rollNumber: 25
}
console.log(Studnet1);