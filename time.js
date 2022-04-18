/* const getUsers = () => {
  let users = [];

  //delay 15sec (15000ms)
  setTimeout(() => {
    users = [
      { username: "Jah", email: "testjah@gmail.com" },
      { username: "Zoe", email: "testzoe@gmail.com" },
    ];
  }, 15000);
  return users;
};
const findUser=(username, callback)=>{
    const users=getUsers();
    const user=users.find((user)=>user.username===username);
    callback(user);
}
//console.log(find);
 */
function getUsers() {
  return [
    { username: 'john', email: 'john@test.com' },
    { username: 'jane', email: 'jane@test.com' },
  ];
}

function findUser(username) {
  const users = getUsers(); 
  const user = users.find((user) => user.username === username);
  return user;
}

function getUsers() {
  let users = [];

  // delay 1 second (1000ms)
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 1000);

  return users;
}