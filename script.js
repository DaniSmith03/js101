// Hello World
// console.log("Hello World")
// console.log ("My Name is Dani") Just some testin with the hello world string

const friendlyGreeting = "Hello World"//Sets a variable to print Hello World
let myName = 'Dani';
let birthYear = 1993;
let currentYear = 2021;
let myAge = currentYear - birthYear;
//Defining some variables in the above code.

function aboutMe(name, age) {
    console.log(`Hi my name is ${name} I am ${age}`);
    if (myAge >=25){
        console.log('old');
    } else {console.log('young');}

}
//function that takes an input of name,age to output a greeting of my name and age
//comapres my age to 25 and prints out old or young

aboutMe(myName,myAge)

//runs about me function using predefined variables

