console.log(1+1);
const first = 1;
let second = first+first;

second = 3;
console.log(first + second);

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
    console.log(young);
} else if (ageOfPerson < 80){
    console.log("grown up");
} else {
    consol.log(old);
}



