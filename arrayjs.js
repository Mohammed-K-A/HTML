// let fruits=["apple","banana","cherry"];
// console.log(fruits);                                   // o/p: [ 'apple', 'banana', 'cherry' ]



// Accessing Array Elements:

// console.log(fruits[0]);                // Output: "apple"
// console.log(fruits[2]);                // Output: "cherry"





// Updating Array Elements:

// fruits[1] = "blueberry";
// console.log(fruits);                      // Output: ["apple", "blueberry", "cherry"]






//  Array Methods: push, pop, shift, unshift, slice, splice

// Adding and Removing Elements:

// push (adds to the end):


// fruits.push("orange");
// console.log(fruits);                        // Output: ["apple", "blueberry", "cherry", "orange"]




// pop (removes from the end):

// fruits.pop();
// console.log(fruits);                          // Output: ["apple", "blueberry", "cherry"]


// unshift (adds to the beginning):

// fruits.unshift("grape");
// console.log(fruits);                           // Output: ["grape", "apple", "blueberry", "cherry"]



// shift (removes from the beginning):

// fruits.shift();
// console.log(fruits);                              // Output: ["apple", "blueberry", "cherry"]







// Extracting and Modifying Parts of Arrays:


// slice (extracts a section):


// let slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits);                                 // Output: ["apple", "blueberry"]



// splice (removes/replaces/adds):

// fruits.splice(1, 1, "kiwi");
// console.log(fruits);                                          // Output: ["apple", "kiwi", "cherry"]






// Looping Through Arrays: for and forEach

// Using a for Loop:


// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Using forEach:

// fruits.forEach(fruit => console.log(fruit));









// Objects

// let person = {
//     name: "Alice",
//     age: 25,
//     isStudent: true
// };
// console.log(person);



// Accessing Properties:

// console.log(person.name);                          // Output: "Alice"
// console.log(person["age"]);                          // Output: 25


// Updating Properties:

// person.age = 26;
// console.log(person.age);                            // Output: 26









// Nested Objects and Arrays

// Nested Objects:


// let employee = {
//     name: "Bob",
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };
// console.log(employee.address.city);                         // Output: "New York"



// Objects in Arrays:

// let employees = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 }
// ];
// console.log(employees[1].name);                               // Output: "Bob"













// Common Array and Object Methods


// map, filter, and reduce for Arrays

// map

// let numbers = [1, 2, 3];
// let squared = numbers.map(num => num * num);
// console.log(squared);                                          // Output: [1, 4, 9]



// filter

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);                                             // Output: [2]


// reduce

// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);                                                       // Output: 6











// Object.keys, Object.values, and Object.entries


// Extracting Keys:

// console.log(Object.keys(person));                             // Output: ["name", "age", "isStudent"]


// Extracting Values:

// console.log(Object.values(person));                              // Output: ["Alice", 26, true]


// Extracting Entries:

// console.log(Object.entries(person));                           // Output: [["name", "Alice"], ["age", 26], ["isStudent", true]]






// Qns

// write a program to print only fruits with more than 5 letters using loop

// let fruits=['Anar','Kiwi','Mango','Orange','Jackfruit'];
//  for(let i=0;i<fruits.length;i++){
//     if (fruits[i].length>5){
//         console.log(fruits[i])
//     }
// }



// Write a program to find the name of the youngest employee in an array of objects

let employee=[
    {name: 'Sulu', age: 20},
    {name: 'Rashi', age: 23},
    {name: 'Fahad', age: 30},
];
let young=employee[0];

for (let i=1; i<employee.length; i++){
    if (employee[i].age < young.age){
        young=employee[i];  
    }
}
console.log("Youngest Employee:", young.name, "\nAge:", young.age);