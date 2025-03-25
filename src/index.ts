interface User {
    name : string
    age : number
    email:string
   
}

const user :Readonly<User> = {
    name:"rih",
    age:12,
    email:"rohsuup["
}

//user.name="rishu"
//gives erroe we can not change even the internal value now earlier we were able to change like line no.-14 n
// but with the help of Readonly api we can prevent this property which is usefull in many cases that can be found on the internet.



// type user1 = Pick<user, 'name' | "age" | "email">

// type user2 =Partial<user1>

// function updateuser(updateprops:user2){
//     //hit the database to update only restricted parts
// }

//defination- pick let us pick specific value from types and interface as well as above example
