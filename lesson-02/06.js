let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
}

let passportBobr = {...passportWithAddress}

passportBobr.address = {
    country: "USA",
    city: "Bobryisk"
}


console.log(passportWithAddress.address);
console.log(passportBobr.address);