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
