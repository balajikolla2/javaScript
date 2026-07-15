/*
Data Structures allow us to store and organize data efficiently. This makes us access and performs operations on the data smoothly.
In JavaScript, we have built-in Data Structures like,
 -Arrays
 -Objects
 -Maps
 -Sets
*/

//creating an array:

let myarray = [1, 45, 23, 43, 'five', 56]
console.log(myarray)
console.log(myarray[1]) //accessing array element
myarray[2] = 4.5 //modifying an array
console.log(myarray)
let arraylength = myarray.length;
console.log(arraylength);


myarray.push(true);
myarray.push(10); //push() method
console.log(myarray);

let lastitem = myarray.pop() //pop() method
console.log(myarray);
console.log(lastitem);