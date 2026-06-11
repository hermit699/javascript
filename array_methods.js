// //! array methods 1. push, pop, shift, unshift, at, includes, indexOf, LastIndexof.....
//  const numbers = [23,4,5,6,6,7];

//  //* forEach
//  //arr_name.forEach(callback)
//  const callback = (value, index, array) => {
//     console.log(value, index, array);
//     return value *2;

    
//  };
// //  numbers.forEach(callback); 

// numbers.forEach((_, index)) => {
//     console.log(index);

// map
// array.map(callback) 
//returns new array

// const double = numbers.map ((value) => {
//     val*2;
// });
// console.log(numbers);
// console.log(double);

//map uses in arrays
 

// const doubled = numbers.map((val)) => {
//     return val *2;
// };

//filter array methods'

// const even = numbers.filter((val, index)) =>{
//     if(val%2===0){
//         return true;
//     } 
// };
// console.log(even);
// console.log(doubled);

//reduce 

// const totalSum = numbers.reduce((acc, val) => {
//     return (acc += val);
// });
// console.log(totalSum);

// const cart = {
//     user: {},
//     items: [
//         {products:{id:1, price:1000}, quantity:12},
//         {products:{id:2, price:100}, quantity:10},
//         {products:{id:3, price:1500}, quantity:12},
//     ],
// };
// const totalPrice = cart.items.reduce((acc, val) => {
//     return acc += val.products.price*val.quantity
// },0);
 
// console.log(totalPrice);   

//find 
// const res = numbers.find(val) => {
//     if(val>20){
//         return true;
//     };
// }

// const res = numbers.find(val)=> 20);
// numbers.findLast ((val) val> 20);

// const res = cart.items.find((items) => items.products.id === 1);
// const res1= cart.items.findIndex((items) => items.products.id === 1);
// console.log(res);
// console.log(res1);

// //every / some : returns Boolean
 

// console.log(numbers.every((val) => val > 2));

// console.log(numbers.every((val) => val > 10));

// console.log(numbers.every((val) => val > 10));
// console.log(numbers.every((val) => val > 10));
// console.log(numbers);


//sort 

// const numbers = [2,3,5,67,32,45]'
// console..log(numbers);
// numbers.sort((a,b))=>{ a - b};




