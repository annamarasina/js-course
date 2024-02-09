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
