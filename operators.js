/* comparison operator 

Comparison operator includes the following:
- == (equal to)
- === (strictly equal to)
- != (not equal to)
- !== (strictly not equal to)
- > (greater than)
- < (less than)
- >= (greater than or equal to)
- <= (less than or equal to)
// */
let a = "10";
let b = 10;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

// // assignment operator

let x = 10;
let y = 20;
x +=y;
x -=y;
console.log(x);
console.log(x);

// //logical Operators 
//  // ! AND [&& ] OR [||] NOT [!]

let w = true;
let z = false;
console.log( w && z) ;
console.log(w || z);
console.log(!w);
console.log(!z);

// // Logical Operator 

let age = 25;
if( age>=18 && age <=30){
    console.log("You are eligible for the job");
}
else{
    console.log("You are not eligible for the job");
}


let age = 34;
if( age>=18 && age <=30){
    console.log("You are eligible for the job");
}
else{
    console.log("You are not eligible for the job");
}

//String Operators

let FirstName = "ajit";
let LastName = "karki";
let FullName = FirstName + " " + LastName;
console.log(FullName);


// Ternary Operator

let age =18;
let result = (age>=18) ? "You are minor" : "You are adult";
console.log(result);


//Extra examples of Operators

let isLoggedIn = true;
const userName = "Ajit karki";

const alert= isLoggedIn 
? `Welcome ${userName}
:"Please login";
console.log(alert);


let isLoggedIn = false;
const userName = "Ajit karki";

const alert= isLoggedIn 
? `Welcome ${userName}`
:"Please login";
console.log(alert);










