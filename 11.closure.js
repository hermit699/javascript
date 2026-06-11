// LIFO last in first out  is used in callstack. 

//closure 

// const Counter = () =>{
//     let count ="parent";

//     return () =>{
//         console.log(count);
        
//     };
// };
// const child = Counter ();
// child();


// const counter = Counter();
// const counter1 = Counter();


// const Closure = () =>{
//     let count = 0;

// return ()=>{
//     count++;
//     console.log();
    
// };
// };

// const counter = Counter();
// const counter1 = Counter();
// counter();


const Closure = () =>{
    let count = 1;
    
return{increment: () => {
        count++;
        console.log(count);

    },
    decrement: () => {
        count --;
        console.log(count);
    },
    show: () =>{
        console.log(count);
        return count;
    }
};
};

const count = Closure();
count.increment();
count.increment();
count.increment();





