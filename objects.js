const user = {
    name: "Hari bahadur",
    email:'hari@gmail.com',
};
console.log(user);


// //accessing/reading objects properties

// //dot notation 

 console.log(user.name);
 const user_name = user.name
 console.log(user_name);
  console.log(user.age);
  //let name = ""
  console.log(user.full_name);


  //*bracket notation[]
  
 //bracket notation
 console.log(user["email"]);
 console.log(user);
 

  console.log(user["full name"]);
  let key = "email";
  //console.log(user.key); 
  console.log(user[key]);
  key = "name";
  console.log(user[key]);
  console.log(user);
  

  //adding new properties
user.id = "1";
const new_key = "age"
const new_val = 20;
user[new_key] = new_val;


//modify object properties
user.age = 27;
console.log(user);


//destructuring 

let name = user.name;
let email = user.email;
let id = user.id;


let user2 = {
    name:"alice",
    email:"alice@gmail.com",
    id:"34"
    age: "45",

};

let{name, email, id, age} = user;
let{ name:user2_name, email:user2_email} = user2
console.log(name, email);
console.log(user2_email,user2_name);

//rest Op............

let {age, id, ...rest} = user;
console.log(x);

let {name, email, ...x} =user;
console.log(x;


?spread open.....
 
let o1= {
    a: "a",
    b: "b",
};
let o2 = {...o1, c: "c"};
o2.a = "a2";
console.log(o1, o2);


// ??control statements and arrays




  
  

