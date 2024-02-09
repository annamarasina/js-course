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
        throw new Error("role is not provided");
    }
    return user.role;
};

const result = roleReturn(user);

console.log(result);
