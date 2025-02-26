// ARRAYS is data structure  
// resizable , mix of data types can be used  0 based indexing 
// array always create shallow copies means they share the same referrence 
/// *******************DECLARATION******************

const numbers = [34,56,78,97]

numbers.push(69);
numbers.pop();
numbers.unshift(109);
numbers.shift();

console.log(numbers);

console.log(numbers.includes(9));
console.log(numbers.indexOf(56));

const newArr = numbers.join()
// changes data type to string 
console.log();
console.log();

// doesnt include boundary and 
// nothing changes in orginal array
const N1 = numbers.slice(1,3);
console.log("A ", numbers);
console.log("B ",N1);

console.log()
console.log()

// Includes Boudnary 
// kat ke hi alag akr deta hai woh part orginal array se 
const N2 = numbers.splice(1,3);
console.log("C ",numbers);
console.log("D ",N2);
