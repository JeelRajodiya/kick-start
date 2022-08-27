// N candy
// M students
// i th bag has C(i) candy
// every kid has to recive same and maximum amount of candy
// open each bag and mix all pieces
// how many pieces of candy will remain after

// input => 1st line: test cases
//       => 2nd line: N , M
//       => 3rd line: C1,C2,C3...Cn

// Sample input
// 2            : no of tests
// 7 3          : no of bags = 7 , no of kids = 3
// 1 2 3 4 5 6 7
// 5 10
// 7 7 7 7 7

// sample output
// Case #1: 1
// Case #2: 5    where 5 is remaining candies
declare var process: any;

import readline from "readline";
let rl = readline.createInterface(process.stdin, process.stdout);

function parseInput(lines: string[]) {
	let lineOne: string[];
	let lineTwo: string[];
	let bagArray: number[];
	let noOfKids: number;
	let totalCandies: number;
	let remainder: number;
	let testNo = 1;

	let line = 0;
	let noOfTests = Number(lines[line++]) * 2;
	for (; line <= noOfTests; line++) {
		lineOne = lines[line].split(" ");
		lineTwo = lines[++line].split(" ");
		noOfKids = Number(lineOne[1]);
		bagArray = lineTwo.map((i) => Number(i));
		totalCandies = bagArray.reduce((a, b) => a + b, 0);
		remainder = totalCandies % noOfKids;

		console.log(`Case #${testNo}: ${remainder}`);
		testNo++;
	}
}

let lines: string[] = [];

rl.on("line", (line) => lines.push(line)).on("close", () => parseInput(lines));
