/*
Method 1:
Question:
You are given an array of Integers in which each subsequent value is not less
than the previous value. Write a function that takes this array as an input and 
returns a new array with the squares of each number sorted in ascending order.

Clarifing Questions:
- Are all numbers positite?
- Are tre Integers distinct?
- Can an empty array of Integers be given as input?
*/

//Brute Force Solution
function sortedSquared(array) {
	const newArray = new Array(array.length).fill(0);
	for (let i = 0; i < array.length; i++) {
		newArray[i] = Math.pow(array[i], 2);
	}
	newArray.sort((a, b) => a - b);
	return newArray;
}

const a = [1, 3, 4, 5];
const b = [-7, -2, 3, 4, 9];
const c = [];

console.log(sortedSquared(a));
console.log(sortedSquared(b));
console.log(sortedSquared(c));

//T: O(nlogn)
//S: O(n)
