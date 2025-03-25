interface user {
    name : string
    age : number
    email:string
    address: string
    id: number
}

type user1 = Pick<user, 'name' | "age" | "email">

function updateuser(updateprops:user1){
    //hit the database to update only restricted parts
}

//defination- pick let us pick specific value from types and interface as well as above example
