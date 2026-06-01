 //simple Array methods: 
const arr1 = ['red', 'blue', 'yellow', 'green']
console.log(arr1[1]);
arr1[4] = 'black'
console.log(arr1.length);
console.log(arr1);

//push
arr1.push('the colors');
console.log(arr1);

//pop
arr1.pop(arr1);
console.log(arr1);
console.log(arr1.length);

//shift 
arr1.shift('Brown');
console.log(arr1);

//unshift
arr1.unshift(arr1);
console.log(arr1);
return 0; */ 

/* array join method and indexOf */
const words = ['hari', 'bahadur', 'is', 'gay'];
console.log(words.join(","));
console.log(words.join(" "));
console.log(words.indexOf('hari'));
console.log(words.indexOf('bahadur')); 

//map, filter and reduce in array

//map: when you want to apply a change to every single item in the array and get a new array back. 
const prices = ['10', '12', '13', '14'];
const taxIncluded = prices.map(prices => prices*2);
console.log("The final prices are:" + taxIncluded);

//filter(): when you want to look through an array and keep only the items that meet a specific condition.
const num = [1,2,3,4,5,6,7,8,9];
const evenNumbers = num.filter(num => num % 2 === 0 );
console.log(evenNumbers);

//slice and splice in array
const animals = ['dog', 'cat', 'horse'];
console.log(animals.slice(0,1));

//splice 
const animals = ['dog', 'cat', 'horse', 'eagle'];
animals.splice(0, 1, 'tiger','lion');
console.log(animals);


//find arrays

const users = [
{ id: 1, name: 'ajit', premium: true},
{id: 2, name: 'hari', premium: false}
];
const premiumUser = users.find(users=>users.premium === true);
console.log(premiumUser);
