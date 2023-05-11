// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их
function sumTwoPositiveNums(num1, num2) {
    if (num1 < 0) {
        num1 *= -1
    }
    if (num2 < 0) {
        num2 *= -1
    }
    return num1 + num2
}

console.log(sumTwoPositiveNums(-4, -20))



// Напишите функцию, которая складывает только положительные числа
// если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)

function sumPositiveNumbersOnly(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        console.log('One of the numbers is negative!')
    } else {
        console.log(num1 + num2)
    }
}

sumPositiveNumbersOnly(1, 2)



// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach(name => {
    if (name.length <= 5) {
        shortNames.push(name);
    }
})

shortNames.forEach(name => {
    const index = users.indexOf(name)
    users.splice(index, 1);
})

console.log(users);
console.log(shortNames);



// Напишите функцию, которая принимает число в качестве аргумента
// Если число чётное, возводит его в квадрат
// Если числе не чётное, возводит его в куб

function squareOrCube(number) {
    if (number % 2 === 0) {
        console.log(number ** 2)
    } else {
        console.log(number ** 3)
    }
}

squareOrCube(3)


// Напишитие функцию, которая проверяет, является ли слово палендромом
// Слово палендром читается одинаково слева на право и справа на лево
// Пример - 'rotator'

function checkIfPalendrome(word) {
    word = word.toLowerCase().replace(' ', '')
    const reversed = word.split('').reverse().join('')

    if (word === reversed) {
        console.log('Is a palendrome!')
    } else {
        console.log('Not a palendrome!')
    }
}

checkIfPalendrome('rotator')


// напишите функцию которая примет объект 'myCar' в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если 'false' то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 89425
}

function carMessage(carObj) {
    let msg = `Your ${carObj.make} ${carObj.model} `;
    if (carObj.popular) {
        msg += 'is popular. '
    } else {
        msg += 'is not popular. '
    }
    if (carObj.mileage >= 100000) {
        msg += 'It is not covered by warranty.'
    } else {
        msg += 'It is covered by warranty.'
    }
    return msg
}

console.log(carMessage(myCar))
