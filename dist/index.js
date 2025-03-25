"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "rish", age: 24 }, { name: "rhh", age: 34 });
console.log(age);
