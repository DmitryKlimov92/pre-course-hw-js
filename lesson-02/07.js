let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};


let passportMarriedCopy = JSON.parse(JSON.stringify(passportMarried));


passportMarriedCopy.married = true;


console.log("Исходный объект passportMarried:");
console.log(passportMarried);
console.log("\nГлубокая копия с информацией о женатости:");
console.log(passportMarriedCopy);