const user = {
    username : "ANMOL",
    price : 999,
    message : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

user.message()

function chai(){
  console.log(this)
}

chai();

const chai = () => {
    let username = "hitesh";
    console.log(username);
}

const addtwo = (num1,num2) => {
    return num1+num2;
}

const addthree = (x,y,z) => (x+y+z);

// when we have to return an object in single line arrow funtion we use ({object name });

