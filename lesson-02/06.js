let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
}


const passportbobr = JSON.parse(JSON.stringify(passportWithAddress));


passportbobr.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(passportbobr.address.city);