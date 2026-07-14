function manipulateStyles() {
    document.getElementById("headingElement").textContent = "Hi balaji"; //dom(document object model to manipulate html element)
    document.getElementById("headingElement").style.color = "blue";
}


let message; //let keyword is used to create variables..
message = 'Balaji';
console.log(message);

console.log(34 + 65);
let b = "56";
console.log(b)
console.log(typeof(b))

let c = parseInt(b); //to convert string to integer
console.log(c);
console.log(typeof(c));

//in Javascript variable names are in camelcase means balajiKolla or backgroundColor means 2nd word 1st char is captital.

//random(): it generates random Number between 0 and 1
console.log(Math.random())

//The Math.ceil() function always rounds a number up to the next largest integer.
console.log(Math.ceil(14.45))