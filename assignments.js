/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const jollySum = (a, b) => (a === b ? 3 * (a + b) : a + b)

console.log(jollySum(3, 3))
console.log(jollySum(3, 2))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const strangeCompare = (a, b) =>
	a + b === 50 ? true : a === 50 ? true : b === 50 ? true : false

console.log(strangeCompare(25, 25))
console.log(strangeCompare(50, 25))
console.log(strangeCompare(24, 25))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (target, position) => {
	out = target.split("")
	out.splice(position, 1)
	out = out.join("")

	return out
}

console.log(removeChar("tanto va la gatta al lardo", 5))

/*

4)
 Create a function to find the largest of three given integers.
*/

const major3 = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c)

console.log(major3(1, 2, 3))
console.log(major3(13, 2, 31))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const range = (a, b) => {
	let aInRange = a >= 40 && a <= 60 ? true : a >= 70 && a <= 100 ? true : false
	let bInRange = b >= 40 && b <= 60 ? true : b >= 70 && b <= 100 ? true : false
	return aInRange && bInRange
}

console.log(range(50, 101))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const nclone = (target, n) => {
	return isNaN(Number(n)) ? -1 : n > 0 ? target.repeat(n) : -1
}

console.log(nclone("pippo", -1))
console.log(nclone("pippo", "topolino"))
console.log(nclone("pippo", 2))
console.log(nclone("pippo", 10))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cName = (target) =>
	target.toLowerCase().startsWith("los")
		? target
		: target.toLowerCase().startsWith("new")
		? target
		: " "

console.log(cName("new york"))
console.log(cName("los angeles"))
console.log(cName("london"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const aSum = (a) => {
	if (a.length !== 3) {
		return -1
	}
	let sum = 0
	a.forEach((element) => {
        if
		sum += element
	})
	return sum
}
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

15)

Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
