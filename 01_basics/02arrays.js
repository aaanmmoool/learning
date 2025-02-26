const marvel = ["thor","spiderman","ironman"]
const dc = ["batman","superman","flash"]

// we can concat using 
// concat returns a new array 

const allHeroes = marvel.concat(dc);

console.log(allHeroes);

// we can use spread oprators 
// more useful 

const new_heroes = [...marvel,...dc]
console.log(new_heroes);

// when we get array inside of array of array 
// we can use flat method

const another_array = [1,2,3[4,5,6[7,8],[90]],890];

const flatten_array = another_array.flat(4);
console.log(flatten_array);


// Used while scrapping 

console.log(Array.isArray("Anmol"));
console.log(Array.from("ANMOL"));


// here output is empty array 
// to convert this we need to explicitly declare the array of keys and values 

console.log(Array.from({name: "ANMOL"}));

let a = 90;
let b = 89;
let c = -20;

const nums = Array.of(a,b,c);

console.log(nums);
