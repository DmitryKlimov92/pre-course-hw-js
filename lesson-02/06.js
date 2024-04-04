let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
}

let passportBobr = {...passportWithAddress}

passportBobr.address.city = 'Bobryisk';



console.log(passportWithAddress.address);
console.log(passportBobr.address);