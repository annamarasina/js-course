//array map

const userArrayMap = [
    {id:1, name: "jack"},
    {id:2, name: "john"},
    {id:3, name: "mike"},
];

// const usernames = [];
// for (let i=0; i< userArrayMap.length; i++) {
//     usernames.push(userArrayMap[i].name);
// };
// console.log(usernames);

// const usernames = userArrayMap.map((user) => user.name);
// console.log(usernames);

// let allNames = "";
// userArrayMap.forEach(user => {
//     allNames += user.name + " ";
// });

// console.log(allNames.trim());




//array map task

const users = [
    {id:1,name:"jack", age:30},
    {id:2, name:"john", age : 40},
    {id:3, name:"mike", age:50},
];

// const messages = users.map((user) =>{
//     return "Hello " + user.name + " with age " + user.age;
// });
// console.log(messages);

const messages = [];
for (let m=0; m<users.length; m++){
    const message = "Hello " +users[m].name + " with age " +users[m].age;
    messages.push(message);
};
console.log(messages);



// const text = (user) => { 
//     console.log("Hello " + user.name + " with age " + user.age);
// };
// users.forEach(user => text(user));

