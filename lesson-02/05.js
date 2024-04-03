let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCopy = Object.assign({}, passport); // Создаем копию объекта passport
passportCopy.name = "Ivan"; // Меняем имя в копии объекта

console.log (passport);
console.log (passportCopy);