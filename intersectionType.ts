type Auth = {
token: string;
};

type userInfo ={
  id: number;
  email: string;
}

type loggedInUser = Auth & userInfo;

const u1: loggedInUser = {token: "abc123", id: 1, email: "gauravnaiwal@gmail.com"};

console.log(`User Token: ${u1.token}, ID: ${u1.id}, Email: ${u1.email}`);
