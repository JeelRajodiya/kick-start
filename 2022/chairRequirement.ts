/*
Problem
Chef's coding class is very famous in Chefland.

This year XX students joined his class and each student will require one chair to sit on. Chef already has YY chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on.

Input Format
The first line contains a single integer TT — the number of test cases. Then the test cases follow.
The first and only line of each test case contains two integers XX and YY — the number of students in the class and the number of chairs Chef already has.
Output Format
For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair.
*/
declare var require: any;
declare var process: any;

const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function precessInput(lines: string[]) {
	let testCases = parseInt(lines[0]);
	for (let i = 1; i <= testCases; i++) {
		let [students, chairs] = lines[i]
			.split(" ")
			.map((x: string) => parseInt(x));
		if (students > chairs) {
			console.log("LOSS");
		} else if (students < chairs) {
			console.log("PROFIT");
		} else {
			console.log("NEUTRAL");
		}
	}
}

let input: string[] = [];

rl.on("line", (line: string) => input.push(line)).on("close", () =>
	precessInput(input)
);
