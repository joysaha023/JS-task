// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// const value = colors['golden rod'];
// console.log(value);

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['passenger capacity'] = 5;
// console.log(car);

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// const output = student.physics;
// console.log(output);

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let obj = Object.keys(student).length;
// console.log(obj);

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };

// for (let key in myObject) {
//     let value = myObject[key];
//     let type = typeof value;
//     console.log(`${key}: ${value} (${type})`);
// }



// string practice task

function countOccurrences(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();

    // Use the split and filter methods to count occurrences
    let count = str.split('a').length - 1;

    return count;
}

let exampleString = "JavaScript is Awesome!";
let letterToCount = 'a';

let result = countOccurrences(exampleString, letterToCount);

console.log(`The letter '${letterToCount}' appears ${result} times in the string.`);
