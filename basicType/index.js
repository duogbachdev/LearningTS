"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = "typeScript";
user = "10";
var age = 10;
age = 9;
var isStudent = false;
var footer;
// object
var users = {
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
var sum = function (num1, num2) {
    return num1 + num2;
};
sum(1, 2);
// enum  --> neus ko ghi value thi no se hieu value dau tien = 0
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USERS"] = "USER";
})(Role || (Role = {}));
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
// interface --> cau hinh type
var people = [];
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
var userName = [
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
var product = {
    name: "Product",
    price: 2000,
    image: "images/product",
    desc: "Product description",
};
//tuples
var productStr = ["1,2,3,45", "21324", 124, "1231"];
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "ADMIN";
    ROLE["USER"] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.USER;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;
var productValue = function (value) { return value; };
var result = productValue({
    name: "Product A",
    age: 30,
});
