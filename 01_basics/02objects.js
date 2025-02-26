const tinderuser = {}

tinderuser.id = "890";
tinderuser.name = "shrey";
tinderuser.loggedIn = "true";
tinderuser.FullName = {
    firstNAme : "shrey",
    Second : "pandey"
}

const obj1 = {1:"A",2:"B"};
const obj2 = {3:"C",4:"D"};

const obj3 = Object.assign({},obj1,obj2);

console.log(obj3);

const obj4 = {...obj1,...obj2};
console.log(obj4);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));