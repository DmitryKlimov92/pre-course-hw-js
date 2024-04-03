let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Копирование объекта
let copiedPassport = { ...passport };

// Изменение имени в копии объекта
copiedPassport.name = "Ivan";

// Проверка значений исходного и скопированного объектов
console.log(passport.name); // Выведет: Petr
console.log(copiedPassport.name); // Выведет: Ivan