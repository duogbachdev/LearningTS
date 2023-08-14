import { people, userAdmin } from "./interface";

let user: string = "typeScript";

user = "10";

let age: number = 10;

age = 9;

let isStudent: boolean = false;

let footer: null;

// object

const users: {
  name: string;
  age: number;
  job: string;
  size?: string[];
} = {
  name: "reactJS",
  age: 8,
  job: "front End",
  size: ["S", "M", "L", "XL"],
};

// array  []

// const product: string[] = ["1,2,3,45"]

// product.push("1")

// object  array

// const people: {
//     name: string | number,   // union type
//     age: number,
//     job: string,
//     sdt: {
//         sdt1: number,
//         sdt2: number,
//         sdt3: number,

//     }
// }[] = []

// people.push({
//     name: "John",
//     age: 12,
//     job: "full stack",
//     sdt: {
//         sdt1: 124,
//         sdt2 : 432,
//         sdt3: 43443,
//     }
// })

// function

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum(1, 2);

// enum  --> neus ko ghi value thi no se hieu value dau tien = 0
enum Role {
  ADMIN = "ADMIN",
  USERS = "USER",
}
enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

// interface --> cau hinh type

const people: people[] = [];
people.push({
  size: Size.M,
  role: Role.ADMIN,
  name: "John",
  age: 12,
  job: "full stack",
  sdt: {
    sdt1: 124,
    sdt2: 432,
    sdt3: 43443,
  },
});
const userName: userAdmin[] = [
  {
    size: Size.M,
    role: Role.ADMIN,
    name: "John",
    age: 12,
    job: "full stack",
    sdt: {
      sdt1: 124,
      sdt2: 432,
      sdt3: 43443,
    },
    description: "John",
  },
];

interface Iproduct {
  name: string;
  price: number;
  image: string;
}
// interface Iproduct {
//     desc : string
// }

type Tprodoct = {
  name: string;
  price: number;
  image: string;
};
type TprodoctUSer = {
  desc: string;
};
const product: Tprodoct & TprodoctUSer = {
  name: "Product",
  price: 2000,
  image: "images/product",
  desc: "Product description",
};
//tuples
const productStr: [string, string, number, string] = ["1,2,3,45", "21324", 124, "1231"];
enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}
const role: ROLE = ROLE.USER;
enum STATUS_CODE {
  SUCCESS = 200,
  CLIENT_ERROR = 400,
  SERVER_ERROR = 500,
}
const code: STATUS_CODE = STATUS_CODE.SUCCESS;

// generic type  ---> quan trong
// quy dinh kieu du lieu dau vao , va co tinh linh hoat
// const handelClick = <Type>(value: Type) => value

// handelClick<number>(2)

interface User {
  name: string;
  age: number;
}

const productValue = <Type>(value: Type) => value;

const result = productValue<User>({
  name: "Product A",
  age: 30,
});
