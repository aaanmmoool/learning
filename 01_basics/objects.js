// Object create singleton banta hai 
const sym = Symbol("key1")
const user = {
    name: "anmol"
    ,age : 20 
    ,location : "SEHORE"
    ,email: "xyz@gmail.com",
    isLoggenIn : true,
    [sym] : "Mykey1"

}

// by two ways we can acess
console.log(user.email);
console.log(user["email"]);

// with dot there is a problem 
// if the key is string you cant acess

// for symbol to be used in object we have to use []
// like we did it with sym 

// we can explicitly change 

user.email = "anmokilo.gmail.com"
user.greeting = function(){ console.log("hii user ")};
console.log(user.greeting());
user.greeting2 = function(){
    console.log(`hii my firned ${this.name}`);
}
console.log(user.greeting2())
Object.freeze(user);
// to use same varibales in your function 
// we use this.
