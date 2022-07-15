/*
Method 2:
- Make use of the fact the given array od sorted in ascending order.
T: O(n)
S: O(n)
*/

function sortedSquaredArray(array) {
	const newArray = new Array(array.length).fill(0);
	let pointerLeft = 0;
	let pointerRight = array.length - 1;

	for (let i = array.length - 1; i >= 0; i--) {
		const leftSquared = Math.pow(array[pointerLeft], 2);
		const rightSquared = Math.pow(array[pointerRight], 2);
		if (leftSquared > rightSquared) {
			newArray[i] = leftSquared;
			pointerLeft++;
		} else {
			newArray[i] = rightSquared;
			pointerRight--;
		}
	}
	return newArray;
}

const a = [1, 3, 4, 5];
const b = [-7, -2, 3, 4, 9];
const c = [];

console.log(sortedSquaredArray(a));
console.log(sortedSquaredArray(b));
console.log(sortedSquaredArray(c));
