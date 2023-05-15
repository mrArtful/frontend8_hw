// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];
for (num of numbers) {
    if (num % 2 === 0) {
        console.log(num, 'Even');
    }
    if (num === 23) {
        break
    }
}


// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];
let htmlString = '<ul>'
for (person of people) {
    htmlString += `\n\t<li><h1>Hello ${person.name} ${person.surname}</h1></li>`
}
htmlString += '\n</ul>'

console.log(htmlString);

// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

const oddEven = function (start, end) {
    for (start; start <= end; start++) {
        if (start % 2 === 0) {
            console.log(start, 'Even');
        } else {
            console.log(start, 'Odd');
        }
    }
}
oddEven(10, 50);

// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

const threeNumCompare = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is largest');
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2, 'is largest');
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3, 'is largest');
    } else {
        console.log('At least two numbers were equal!');
    }
}
threeNumCompare(30, 30, 3);



// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'FIZZ BUZZ')
    } else if (i % 3 === 0) {
        console.log(i, 'FIZZ')
    } else if (i % 5 === 0) {
        console.log(i, 'BUZZ')
    }
}

// Используйте метод filter() чтобы создать массив с четными числами из массива nums
const nums = [1, 2, 3, 4, 5, 6];

const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]


// Используйте метод map() чтобы создать массив со строкоми где все буквы заглавные
const strings = ["hello", "world", "javascript"];
const capitalizedStrings = strings.map((str) => str.toUpperCase());
console.log(capitalizedStrings); // ["HELLO", "WORLD", "JAVASCRIPT"]


// Используйте метод filter() чтобы получить массив с совершеннолетними людьми
const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
  ];
  const adults = people2.filter((person) => person.age >= 18);
  console.log(adults); // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
