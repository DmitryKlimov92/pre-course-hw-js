let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создаем глубокую копию объекта
let passportMarriedCopy = JSON.parse(JSON.stringify(passportMarried));

// Добавляем информацию о женатости
passportMarriedCopy.married = true;

// Выводим оба объекта в консоль для проверки
console.log("Исходный объект passportMarried:");
console.log(passportMarried);
console.log("\nГлубокая копия с информацией о женатости:");
console.log(passportMarriedCopy);