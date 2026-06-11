/* types of scope are 
1. Global scope
2. Block scope
3. function scope
4. lexical scope  */

//global scope

// let global_let = "global_let";
// const global_const = "global_const"'
// var global_var  = "global_var";
// console.log(global_let);

// //block scope{}

// if(true){
//     console.log("--------------------block--------------");
//     const global const ="block_const "
//     var block var = "block_var");
//     console.log(block_const, block_let, block_var);   
// }
// console.log(block_var);


// // function scope

// const scope = () =>{
//     let function_let = "function_left";
//     const function_const  "function_const";
//     var function_var = "function_var"
//     console.log("----------function-------");
//     console.log(function_const, function_let, function_var);
// };

// scope();
// console.log(function_let); //function_let is not defined
// console.log(function_const); //function_const is not defined //Reference Error
// console.log(function_var); //function_var is not defined // reference Error 


// //Lexical scope: 
// console.log("----------lexical SCOPE-------------------");


// const outer = () => {
//     let outer_let = "outer let"
//     //console.log(x);
//     const tinner =() => {
//         let x = 10;
//         console.log(x);
//         console.log(outer_let);
        
//         const child = () =>{
//             console.log("child");
//             console.log(x);
//             console.log(outer_let);  
//         };
//         child();       
//     };
//     inner();
// };
// outer();


//scope chain or scope chaining (self) 

// 
// if(true){
//     if(true){
//         let x = 10;
//         if (true){
//             console.log(x);
//             x = 30;
            
//         }
//         console.log(x);
        
// }
// }


// function scope(){
//     if(true){
//         let x = 40;
//         if(true) {
//             console.log(x);
//             x =56;
//         }
//         console.log(x)
//     }}





    //hoisting -----


// let x = 90;
// var 









