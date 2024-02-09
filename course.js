console.log(1+1);
//variables const, let var
const first = 1;
let second = first+first;

second = 3;
console.log(first + second);


//functions
const one = 1;
const two = 2;
const three = 3;
const four =4;
const five=5;
console.log(one+two+three+four+five);
const sum = one+two+three+four+five;
console.log(sum);

const sumTwoNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const result = sumTwoNumbers(1,2);
const secondResult = sumTwoNumbers(5, 4);
console.log(result, secondResult);


//task//
const sumFiveParameters = (firstPar, secondPar, thirdPar, fourthPar, fifthPar) => {
    return firstPar + secondPar + thirdPar + fourthPar + fifthPar;
};
const resultPar = sumFiveParameters(1,2,3,4,5);
console.log(resultPar);


// if else condition
const falsy = false;
const truthy = true;

if (10<4) {
    console.log("it is true");
} else if (15<10) {
    console.log("it is for sure true");
}
else {
    console.log("it is false");
}



//task//
const ageOfPerson = 40;
if (ageOfPerson < 20) {
    console.log("young");
} else if (ageOfPerson > 20 && ageOfPerson < 80){
    console.log("grown up");
} else {
    console.log("old");
}


const getAgeMessage = (ageOfPerson) => {
    if (ageOfPerson < 20) {
        console.log("young");
    } else if (ageOfPerson > 20 && ageOfPerson < 80){
        console.log("grown up");
    } else {
        console.log("old");
    }
};

getAgeMessage(85);


//ternary operator = condition ? answer if true : answer if false
const age = 45;
const message = age > 20 ? "old" : "young";
console.log(message);

//task
const username = "brad";
const returnMessage = username === "jack" || username === "john" ? "admin" : "user";
console.log(returnMessage);



//switch case - rare, takes too much space, you need to cover every single case, you need to write break, and you dont write dif conditions for every case, you are just checking a single property for different values

const showDay = (day) => {
    switch (day) {
        case "monday":
            console.log("monday");
            break;
        case "tuesday":
            console.log("tuesday");
            break;
        default:
            console.log("not found");
    }
};

showDay("tuesday");



// objects
const user = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 30,
};

user.role = 'Captain';
delete user.age;
console.log(user)
console.log(user.age)

//string concatenation

const fullName = user.firstName + " " + user.lastName;
console.log(fullName);

//task
const userObject = {
    name: "Anna",
    role: "admin",
    age: 18,

}
const access = (userObject) => {
    if (userObject.role === "admin"){
        console.log("Give access")
    }
};
access(userObject);



//array
const arr = [1, 2, 3, 4, 5];

const names =["john","jack", "mike"];

names.push("bob");
names.splice(2,2);

console.log(names);

const users = [
    {name: "jack", age: 20},
    {name: "john", age:25},
    {name: "mike", age:30},
];
console.log(users[0].name);

//task
const arrayOfObjects = [
    {title: "dog", likes: 980},
    {title: "tree", likes: 68},
    {title: "friends", likes: 34},
];

arrayOfObjects.push({title:"flowers", likes: 107});
console.log(arrayOfObjects);
