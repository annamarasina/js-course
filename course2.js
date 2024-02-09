//handling errors
const getFullName = (firstName, lastName) => {
    if (firstName === undefined || lastName === undefined) {
        throw new Error("some params are not correct");
    }
    return firstName + " " +lastName;
};

const resultFullName = getFullName("Jack", "Sparrow");

console.log(resultFullName);


//task
const user = {
    name: "Anna"
};

const roleReturn = (user) => {
    if (user.role === undefined) {
 //       throw new Error("role is not provided");
    }
    return user.role;
};

const result = roleReturn(user);

console.log(result);


//for loops
const numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(i);
}
console.log(numbers);

//task
const emptyArray = [];
for (let i=0;i<10;i++) {
    emptyArray.push({
        id: i,
        name: "hello_" + i,
    });
};
console.log(emptyArray);




//while loop
let i =0;
while (i<10) {
    console.log(i);
    i +=2;
};

//task
const emptyWhileArray = [];
while (i<10) {
    emptyWhileArray.push({
        id: i,
        name: "hello_" + i,
        
    });
    i += 3;
};
console.log(emptyWhileArray);
