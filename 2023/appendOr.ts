/*

input
4
4 15
3 5 6 2
3 8
1 2 1
1 1
0
5 7
1 2 4 2 1

output:
8
-1
1
0 
*/

import readline from "readline";
function appendOr(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;
	let Y: number;
	let array: number[];
	let X: number;
	let bitOrOfArray: number;
	let diff: number;

	for (let i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		Y = Number(line1.split(" ")[1]);
		array = line2.split(" ").map((a) => Number(a));
		bitOrOfArray = array.reduce((a, b) => a | b);
		diff = Y - bitOrOfArray;
		if ((diff | bitOrOfArray) === Y) {
			console.log(diff);
		} else {
			console.log(-1);
		}
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	appendOr(input);
});
