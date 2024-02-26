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
    {id:1,name:"jack", age:30, isActive: true},
    {id:2, name:"john", age : 40, isActive: false},
    {id:3, name:"mike", age:50, isActive: true},
];
console.log(users.length);
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

// array filter

const activeUsers = [];

for (let a = 0; a< users.length; a++) {
    if (users[a].isActive) {
        activeUsers.push(users[a]);
    }
}

console.log(activeUsers);
// alternative

const activeUsers2 = [];

users.forEach((user) => {
    if (user.isActive) {
        activeUsers2.push(user);
    }
});
console.log(activeUsers2);

const activeUsers3 = users.filter((user) => user.isActive);
console.log(activeUsers3);

//array filter task

const usersFilterTask = [
    {id:1,name:"jack", age:30},
    {id:2, name:"john", age : 40},
    {id:3, name:"mike", age:50},
];

const olderThan30 = usersFilterTask.filter((user) => user.age > 30);
console.log(olderThan30);

class User {
    constructor(firstName, surName) {
        console.log('constructor', firstName, surName)
        this.firstName = firstName;
        this.surName = surName;
    }

    getFullName() {
        return this.firstName + " " + this.surName;
    }
}

class Admin extends User {
    constructor(firstName, surName, role) {
    super(firstName,surName);
    this.role = role;
 }
 getRole() {
    return this.role;
}}


const user = new User("Jack", "Sparrow");
const user2 = new User("Foo", "Bar");

const admin = new Admin("Admin name", "Admin surname", "superadmin")
console.log(user.getFullName(), user2.getFullName(), admin.getRole());

class Article{
    constructor(ID, title) {
        console.log(ID, title)
        this.ID = ID;
        this.title = title;
    }

getTitle() {
    return this.title;
}}

const article1 = new Article("1", "JS");
console.log(article1);

class News extends Article {
    constructor(ID, title, source){
        super(ID, title);
        this.source = source ;   
    }
    getSource() {
        return(this.source);    
    }
}
const article2 = new News("2", "JS", "YouTube");
console.log(article2);