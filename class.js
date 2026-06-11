// const person = {
//     name: "john",
//     email:"john@gmail.com"
// };
// const person1 = {
//     name:"john1",
// }



// class person {
//     name;
//     email;
//     password;

// constructor(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }
// }

// const john = new person("john doe", "john@gmail.com", "12334");
// console.log(john);
// console.log(john.name);
// const ram = new person("ram","ram@gmail.com","2434344");
// console.log(ram);
// console.log(ram.name);


// class person {
//     // name;
//     // email;
//     #password;

// constructor(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }


// getPassword(){
//     return this.#password;
// }
// getName(){
//     return this.name;
// }
// getEmail(){
//     return this.email;
// }
// }  console.log(john.getPassword());


//student (name, email, password, faculty, roll, year);


// class Student {
//     name;
//     email;
//     #password;
//     faculty;
//     rollNo;
//     year;

//     constructor (name, email, password, faculty, rollNo,year){
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//         this.faculty = faculty;
//         this.rollNo = rollNo;
//         this.year = year;
//     }
//     getPassword(){
//         return this.#password;
//     }
//     getname(){
//         return this.email;
//     }
//     getemail(){
//         return this.email;
//     }
//     getfaculty(){
//         return this.faculty
//     }
//     getrollNo(){
//         return this.rollNo
//     }
//     getyear(){
//         return this.year
//     }

// const john = new Student("john doe", "john@gmail.com", "12334");
// console.log(john);
// }




//* Inheritance 

// class Person {
//   name;
//   email;
//   #password;

//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//   }

//   getPassword() {
//     return this.#password;
//   }

//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// class Student extends Person {
//   //super() --> 
//     constructor(name, email, password, faculty, roll, year) {
//     super(name, email, password);
//     this.faculty = faculty;
//     this.roll = roll; 
//     this.year = year;
//     }
// }

// const stu1 = new Student(
//   "student 1",
//   "stu1@gmail.com",
//   "1234",
//   "bca",
//    12,
//   2026,
// );
// console.log(stu1);
// console.log(stu1.getPassword());
// console.log(stu1.getfaculty()):

//  //!abstraction: 

 class CoffeeMaker {
    makeCoffee(){
//start
this.#start();
    
    //water heating
    this.#heatWater();
    //coffee is ready
    this.#dispatch();
 }
 #start(){
    console.log("starting");

 }
 #heatWater(){
    console.log("heating water");
 }

 #dispatch(){
    console.log("coffee is ready");
 }
}
const cm = new CoffeeMaker();
cm.makeCoffee();



//Static method], getter/setter, this keyword: 

//task : account class: initial_amt, acc_name) -> paisa herne, account herne, amount deposit: current balance +ve not in minus: 