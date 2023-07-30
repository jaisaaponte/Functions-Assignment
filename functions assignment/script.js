function firstLetterName(name) {
	const firstLetter = name[0];
	alert(`The name ${name} starts with the letter ${firstLetter}`);
}

// Define function to check if a number is even
function divisibleByTwo(number) {
	if(number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
function largestNum(arr) {
	let max = -Infinity;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
const name = "Jaisa";
const number = 6;
const arr = [1, 7, 3, 9, 5, 4, 8, 2];

firstLetterName(name);
console.log(divisibleByTwo(number));
console.log(largestNum(arr));