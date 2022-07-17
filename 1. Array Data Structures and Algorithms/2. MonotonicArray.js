/*
Question
An Array is monotic if it is either monotone increasing or nonotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array in monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.
Clarifing Questions:
Is an empty array monotonic?
Is an array only 1 integer monotonic?
T: O(n)
S: O(1)
*/

function monotic(arr) {
	const first = arr[0];
	const last = arr[arr.length - 1];

	if (first === last) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] !== arr[i]) return false;
		}
	} else if (first < last) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] < arr[i]) return false;
		}
	} else {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] > arr[i]) return false;
		}
	}
	return true;
}

console.log(monotic([1, 2, 3]));
console.log(monotic([5, 5, 5]));
console.log(monotic([5, 5, 5, 10]));
console.log(monotic([5, 5, 5, 10, 1]));
console.log(monotic([3, 2, 1]));
console.log(monotic([3, 2, 1, 10]));
