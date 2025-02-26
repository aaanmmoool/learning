function sayMyName(){
    console.log("HiesenBerg");
}

sayMyName();
// num1 and num2 are paramters
function sum(num1,num2){
  console.log(num1+num2);
}


// 3 and 38 are arguments
const result = sum(3,89);

function loginUserMessage(username){
    if(!username){
      console.log("Please enetr UserName")
      return 
    }
    return `${username} just logged in `
}

console.log(loginUserMessage("anmol"));

function calculate(val1,val2, ...num1){
    return num1;
}

console.log(67,89,90,980,9008);