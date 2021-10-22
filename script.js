/**
* 5. Basic JavaScript (10%)
*/

let i = 3;

for (; i < 5; i++) {
  console.log(i);
}
// for Q37
// Q37. What does this code snippet do? Paste it to vscode, try to run and explain.
/**
 * This code will do a loop for every value of i. Despite within this for loop i is intentionally missing but because of closure of Javascript so it can access to outer for loop scope to get i value. result in VS code will print out value of 3 and 4
*/

let i = 3;

for (; i < 5;) {
  console.log(i);
  i += 1;
}
// for Q38
// Q38. What does this code snippet do? Paste it to vscode, try to run and explain.
/**
 * 
 * This code will do a loop for every value of i. Despite within this for loop i, and third argument is intentionally missing but because of closure of Javascript so it can access to outer for loop scope to get i value. result in VS code will print out value of 3 and 4, 5.
 */
let i = 3;

for (; ;) {
  console.log(i);
  i += 1;
}
// for Q39
// Q39. What does this code snippet do? Paste it to vscode, try to run and explain.
/**
 * This for loop is loop forever and print out from 3 to infinity. Because here dont have conditional to stop this loop.
 */


// Q40. Use for-loop to console log square numbers from 1 to 10.

for (let i = 0; i <= 10; i++) {
  console.log(i * i);
}

// ouput: 0 1 4 9 16 25 36 49 64 81 100
// hint: you can use more than 1 variable in for-loop
// I hope that you understand for-loop a little more after these 4 questions.

// 6. Advanced JavaScript (10%)
const data = [
  {
    id: 1,
    name: "A",
    age: 20,
  },
  {
    id: 2,
    name: "B",
    age: 21,
  },
  {
    id: 3,
    name: "C",
    age: 22,
  },
];
// for Q41 and 42.
// Q41: Write a function with input(argument) is an array, output(return) is one element from input with age is 21. Test with above array.
function findAge21(array) {
  const [result] = array.filter(i => i.age === 21)
  return result
}
findAge21(data) // return 1 object { id: 2, name: 'B', age: 21 }

// Q42: Write a function with input(argument) is an array, converts this array into json format and saves to db.json file.Test with above array.

const fs = require('fs')
function saveToDbJson(array) {
  const jsonArray = JSON.stringify(array)

  fs.writeFile("db.json", jsonArray, err => {
    !err ? console.log('Create db.json OK') : console.log('err :>> ', err)
  })
}

saveToDbJson(data)