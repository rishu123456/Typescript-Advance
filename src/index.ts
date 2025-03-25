interface user {
    name : string
    age : number
}

function sumOfAge(user1:user, user2:user){
    return user1.age +user2.age;
}

const age = sumOfAge({name:"rish",age:24},{name:"rhh",age:34});
console.log(age);