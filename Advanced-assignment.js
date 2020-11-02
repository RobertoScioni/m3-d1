/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = (I) => {
	const S = I.split("")
	const counter = {}
	S.forEach((Character) => {
		if (Character in counter) {
			counter[Character]++
		} else {
			counter[Character] = 1
		}
	})

	let max = 0
	let maxChar
	for (const character in counter) {
		if (counter[character] > max) {
			max = counter[character]
			maxChar = character
		}
	}
	return maxChar
}

console.log(maxChar("aaacccddddddddddddddddcbb33"))

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const anagrams = (S1, S2) => {
	//S1 = S1.toLowercase
	let out = true
	const filter = new RegExp("[^a-z]")
	S1 = S1.toLowerCase().replace(filter, "")
	S2 = S2.toLowerCase().replace(filter, "")
	S1 = S1.split("")
	S2 = S2.split("")
	if (S1.length !== S2.length) {
		return false
	}

	S1.forEach((character) => {
		if (S2.includes(character)) {
			let tmp1 = S1.join("").replace(RegExp(character, "g"), "")
			let tmp2 = S2.join("").replace(RegExp(character, "g"), "")
			out = tmp1.length === tmp2.length ? true : false
		} else {
			out = false
			return false
		}
	})
	return out
	//console.log(S1)
}

console.log(anagrams("rail safetyy", "fairy taless"))

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const evaluateAnagrams = (word, candidates) => {
	const out = []
	candidates.forEach((anagram) => {
		if (anagrams(word, anagram)) {
			out.push(anagram)
		}
	})
	return out
}
const word = "listen"
const candidates = ["enlists", "google", "inlets", "banana"]
console.log(evaluateAnagrams(word, candidates))

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
const palindrome = (word) => {
	word = word.split("")
	for (let I = 0; I < Math.floor(word.length / 2); I++) {
		if (word[I] !== word[word.length - I - 1]) {
			return false
		}
	}
	return true
}
console.log(palindrome("abba"))
console.log(palindrome("abcdefg"))

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (number) => {
	return number.toString().split("").reverse().join("")
}
console.log(reverseInt(15))
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const steps = (number) => {
	for (let I = 1; I <= number; I++) {
		console.log("'" + "#".repeat(I).padEnd(4, " ") + "'")
	}
}
steps(4)
/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (word) => {
	return word.split("").reverse().join("")
}
console.log(reverse("apple"))
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunk = (vect, size) => {
	input = vect
	out = []
	chunks = Math.ceil(input.length / size)
	for (let I = 0; I < chunks; I++) {
		let chunk = input.splice(0, size)
		out.push(chunk)
	}
	return out
}
console.log("/ex chunk")
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = (steps) => {
	const width = 2 * steps - 1
	for (let I = 1; I <= steps; I++) {
		let bricks = I + I - 1
		pad = Math.floor((width - bricks) / 2)
		let row = "'" + " ".repeat(pad) + "#".repeat(bricks) + " ".repeat(pad) + "'"
		console.log(row)
	}
}
pyramid(3)
/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
const matrix = (N) => {
	let matrix = []
	let offset = 0
	for (let X = 1, K = offset; X <= N; X++) {
		matrix.push(new Array(N))
	}
	return round(matrix, 1, 0)
}
const round = (matrix, start, startIndex) => {
	let K = start
	let size = matrix.length - startIndex * 2
	let lastIndex = matrix.length - 1
	let x
	let y
	do {
		for (x = startIndex; x <= lastIndex; x++, K++) {
			matrix[startIndex][x] = K
		}
		x--
		for (y = startIndex + 1; y <= lastIndex; y++, K++) {
			matrix[y][x] = K
		}
		y--
		//K = K - 1 + startIndex
		for (x = lastIndex - 1; x >= startIndex; x--, K++) {
			matrix[lastIndex][x] = K
		}
		for (y = lastIndex - 1; y > startIndex; y--, K++) {
			matrix[y][startIndex] = K
		}
		lastIndex--
		startIndex++
	} while (lastIndex > startIndex)
	return matrix
}
/* 
const matrixOld = (N) => {
	let matrix = []
	let offset = 0
	for (let X = 1, K = offset; X <= N; X++) {
		matrix.push(new Array(N))
	}
	for (let n = N, round = 0; n >= 1; n = n - 2, round++) {
		//console.log(matrix)
		for (let x = 1 + round; x <= n; x++) {
			matrix[0][x - 1] = x - round + offset
			if (x < n) {
				matrix[x][n - 1] = n + x
				K = n + x
			}
		}
		for (let Y = n - 1; Y >= 0; Y--, K++) {
			let a = Y - 1
			let c = matrix[n - 1][Y]
			matrix[n - 1][Y] = K
			let b = Y - 1
			if (Y > 0) {
				matrix[Y - 1][0] = K + n
			}
		}
		//	console.log(matrix)
	}
	return matrix
}
*/
console.log(matrix(4))
