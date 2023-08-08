const readline = require("readline");
function hcf(a: number, b: number): number {
	// Base case: if b is zero, return a
	if (b === 0) {
		return a;
	}
	// Recursive case: return the hcf of b and the remainder of a/b
	return hcf(b, a % b);
}

// Define a function to find the hcf of all elements in an array
function hcfArray(arr: number[]): number {
	let answer = arr[0];
	for (let i = 1; i < arr.length; i++) {
		answer = hcf(answer, arr[i]);
	}
	return answer;
}

function subtractionGame(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;
	for (let i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		// even => 2
		// else => 1
		let arr = line2.split(" ").map(Number);
		let evens = 0;
		console.log(hcfArray(arr));
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	subtractionGame(input);
});
