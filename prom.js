const getUsers= ()=>{
    return[
        {username:'John', email:'testjohn@gmail.com'},
        {username:'Doe', email:'testdoe@gmail.com'},
    ];
}

const findUser=(username)=>{
    const users=getUsers();
    const user=users.find((user)=>user.username===username);
    return user;
}

console.log(findUser('ohn'));