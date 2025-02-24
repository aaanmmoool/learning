const score = 400 
console.log(score)
const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1));

const num = 143.36

console.log(num.toPrecision(3))

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))


//      MATH    //

console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(7.67));
console.log(Math.max(4, 5, 7, 8))


// for getting a random decimal between 0 and 1

console.log(Math.random());


// for getting a random number form 0 to 10 

console.log((Math.random()*10) + 1)


const min = 10 
const max = 20 

// for getting a random number between a range 

console.log(Math.floor(Math.random() * (max-min+1))+min)