let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        "country": "USA",
        "city": "Bobryisk"
    }
};

let passportMarried2 = {
    name: "Petr",
    surname: "Petrov",
    address: {
        "country": "USA",
        "city": "Bobryisk",
        married: true
    }
};

/*

const passportMarried2 = JSON.parse(JSON.stringify(passportMarried));
passportMarried2.married = True;

 */

/*
let  passportMarried2 = structuredClone(passportMarried);
passportMarried2.married = "True";
 */
console.log(passportMarried);
console.log(passportMarried2);
