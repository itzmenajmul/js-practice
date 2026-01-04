/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burgerPrice = 600;
if(burgerPrice > 500){
console.log("Free Coke");
}else{
    console.log("Coke price 30 tk");
}


/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weightKg = 500;
const heightM = 4;
const bmi = weightKg / (heightM * heightM);
console.log(bmi)

if(bmi < 18.5){
    console.log("you are underweight");
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("you are normal");
}else if(bmi >= 25 && bmi <= 29.9){
    console.log("You are overweight");
}else{
    console.log("Your are obese");
}

/*
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59


    */

const studentScore = 90;
if(studentScore >= 90){
    console.log("A");
}else if(studentScore >= 80 && studentScore <= 89){
    console.log("B");
}else if(studentScore >= 70 && studentScore <= 79){
    console.log("C");
}else if(studentScore >= 60 && studentScore <= 69){
    console.log("D");
}else{
    console.log("F");
}


/*
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const me = 81;
const friend = 81;
if(me > 80){
    if(friend > 80){
        console.log("Go for a Lunch");
    }else if(friend < 80 || friend >= 60){
        console.log("Good luck next time");
    }else if(friend > 60 || friend >= 40){
        console.log("Friend message unseen");
    }else{
        console.log("block the friend");
    }
}else{
    console.log("I go to home then sleep and act sad");
}


/*

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 2;
const num2 = 20;

let result ;

if(num1 > num2){
    result = num1 * 2;
    console.log(result);
}else{
    result = num1 + num2;
    console.log(result);
}

// FOR TERNARY VERSION
if(num1 > num2 ? result = num1 * 2 : result = num1 + num2){
    console.log(result);
}


/*
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// const age = "student";
const age = 20;

if(age < 10){
    console.log("Free");
}else if(age === "student"){
    console.log("student - 50% discount");
}else if(age >= 60){
    console.log("s.citizens - 15% discount");
}else{
    console.log("Regular ticket fare 800 tk");
}