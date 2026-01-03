/*Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300 */

const iHaveMoney = 1000;
const oneKGOranges = 400;
const oneKGApples = 300;
const totalAmount = (oneKGOranges + oneKGApples);
const shopKeeperReturn = (iHaveMoney - totalAmount);

console.log("The shopkeeper will return: ", shopKeeperReturn);


/*Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */

const mathematics = 75.25;
const biology = 65;
const chemistry = 80;
const physics = 35.45;
const bangla = 99.50;
const studentTotalMarks = (mathematics + biology + chemistry + physics + bangla);
const studentAvgMarks =(studentTotalMarks / 5).toFixed(2);

console.log("The student total average marks is: ", parseFloat(studentAvgMarks))

/*Task-3
Your task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
4 */

const randomNums = 119;
const remainingValue = (randomNums % 5);

console.log("Divided by five and remaining value is: ", remainingValue)

/*Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
=> The program gives false because -8 is a number and isNaN function check is the value not a number, while ignore the first value '11' because js read code up to bottom  */
var a = isNaN('11');
var a = isNaN(15);
console.log(a);
