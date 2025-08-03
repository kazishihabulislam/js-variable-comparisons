console.log(5 > 10);
console.log(10 < 5);
console.log(10 == 5);
console.log(10 <= 5);
console.log(10 >= 5);
var sunglassPrice = 120;
var subject = "EEE";
var isPassed = true;
// 💡 What Are Variables?
/* In JavaScript, variable used to store data.

Example: 
let x = 10;
let y = 20;

Here: 
x stores the value 10;
y stores the value 20;


// 💡 What Are Comparison Operators?
Comparison operators are used to compare two values. They return either:

true (if the comparison is correct)
false (if the comparison is not correct)

// ✅ List of Comparison Operators

Operator                          Name                                 Example                                      Result

==                                Equal to (value only)                x == y                                       false
===                               Equal to (value and type)            x === y                                      false
!=                                Not equal (value only)               x != y                                       true
!==                               Not equal (value + type)             x !== y                                      true
>                                 Greater than                         x > y                                        true
<                                 Less than                            x < y                                        true
>=                                Greater than or equal to             x >= y                                       true
<=                                Less than or equal to                x <= y                                       true


// 💻 JavaScript Examples

*/

// Example 1: Equal to (==)
let a = 5;
let b = 10;
console.log(a == b);

let c = "5";

console.log(a == c); // true (values are equal, type is not checked)

// Example 2: Strict equal to (===)

let applePrice = 30;
let onionPrice = "40";
console.log(applePrice === onionPrice); // false (values are equal, but types are different: number vs string)


// Example 3: Not equal (!=)
let mobilePrice = 20000;
let laptopPrice = 70000;
console.log(mobilePrice != laptopPrice); // true


// Example 4: Greater than / Less than

let registitionFee = 2000;
let examFee = 300;
console.log(registitionFee > examFee); // true
console.log(examFee < registitionFee); // true


let age = 18;
console.log(age > 16); // true
console.log(age < 16); // false


// Example 5: Greater than or equal to 

let score = 75;
console.log(score >= 70); // true
console.log(score >= 100); // false 

// 🔍 Comparison with Strings
let name1 = "Mehadi";
let name2 = "Shihab";
console.log(name1 === name2); // false
console.log(typeof name1 === typeof name2); // true
console.log(name1 !== name2); // true

/* ✅ Using Comparison in Real Scenarios

    // with if statement

    */
let studentAge = 17;
if (studentAge >= 18) {
    console.log("You can vote.")

} else {
    console.log("You are too young to vote.")
} 

// Output: You are too young to vote.

let mehadiAge = 23;
let shihabAge = "21";
console.log(mehadiAge == shihabAge); // false
console.log(mehadiAge === shihabAge); // false
console.log(mehadiAge != shihabAge); // true 
console.log(mehadiAge !== shihabAge); // true



let math = 10;
let english = '10';
console.log(math == english); // true
console.log(math === english); // false
console.log(math >= 90); // false
console.log(math <= 9); // 









