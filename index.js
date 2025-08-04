const age = 21;
if (age >= 45) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yeat")
}

// This is an example of using if-else conditions in JavaScript.

const biryaniPrice = 300;


if (biryaniPrice >= 400) {
    console.log("You can buy this biryani because the price is within or above your budget.")
}

else if (biryaniPrice >= 300) {
    console.log("Biryani is affordable.");
} else {

    console.log("Sorry, you cannot buy this biryani because the price is less than 300 taka.")
}

/* If statement
// The if statement executes a statement if a specified condition is truthy:

//Example: if statement

if (condition){
console.log("value"); // Code to be executed
}

** Else statement 
// If the condition is falsy, else statement is executed. 

// Example: else statement

if(condition is false){
consol.log("value"); // Code not to be executed.
}
else{
    consol.log("value"); // Code to be executed.
}
    */

// Multiple conditions logical operators:
const salary = 35000;
const isEmployed = false;
if (salary > 30000 && isEmployed){
    console.log("You are eligible for the merige");
}
else{
    console.log("You are not eligible for the merige");
}

const isStudent = true;
if(isStudent === false || isEmployed === false){
    console.log("You are eligible for the student discount.");
}else if(isStudent === true && isEmployed === true){
    console.log("You are not eligible for the student discount.")
}

// Multi-level if-else if-else statements allow you to check multiple conditions in sequence.
// The first true condition's block will execute, and the rest will be skipped.
// This is useful for handling different scenarios based on varying input or state.

// Example 1: Basic - Grading System

// Prompt user for marks and convert input to a number
const marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Example 2: Age Group Classification
// const studentAge = Number(prompt("Enter your age:"));
// if (studentAge > 13){
//     console.log("You are a child.");
// }else if (studentAge > 18){
//     console.log("You are a teenager.");
// }else if (studentAge > 25){
//     console.log("You are an adult.")
// }else if (studentAge > 35){
//     console.log("You are a middle-aged person.")
// }else{
//     console.log("You are a senior citizen.")
// }

const studentAge = Number(prompt("Enter your age:"));
if (studentAge <= 13) {
    console.log("You are a child.");
} else if (studentAge <= 18) {
    console.log("You are a teenager.");
} else if (studentAge <= 25) {
    console.log("You are an adult.");
} else if (studentAge <= 35) {
    console.log("You are a middle-aged person.");
} else {
    console.log("You are a senior citizen.");
}

const chanachurPrice = Number(prompt("Enter the price of Chanachur:"));
//  10% discount price 
if (chanachurPrice >= 100){
    const discount = chanachurPrice * 0.10;
    const finalPrice = chanachurPrice - discount;
    console.log(`You get a 10% discount. The final price is ${finalPrice} taka.`);
}

const ricePrice = 1800;
if (ricePrice >= 1700){
    console.log("You can buy this rice because the price is  within or above your budget.")
}else{
    console.log("Sorry, you cannot buy this rice because the price is less than 2000 taka")
}

const mangoPrice = 150;
if( mangoPrice <= 200){
    console.log("You can buy this mango because the price is within or above your budget.")
}else{
    console.log("Sorry, you cannot buy this mango. The price is greater than 100 taka.")
}

const applePrice = 120;
if (applePrice <= 150){
    const discount = applePrice * 0.05;
    const finalPrice = applePrice - discount;
    console.log(`You get a 5% discount on the apple. The final price is ${finalPrice} taka.`)
    console.log("You can buy this apple because the price is within or above your budget.")
}
