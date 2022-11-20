/*
5
4
QQAA
4
QQAQ
3
QAA
1
Q
14
QAQQAQAAQQQAAA

Yes
No
Yes
No
Yes

*/

import readline from "readline";
function countChar(s: string, char: string): number {
	let count: number = 0;
	for (let i of s) {
		if (i === char) {
			count++;
		}
	}
	return count;
}
function processTheSequence(lines: string[]) {
	const testCases: number = Number(lines[0]) * 2;
	let sequenceLen: number;
	let sequence: string;
	// let nOfQ: number;
	// let nOfA: number;
	for (let i = 1; i < testCases; i++) {
		let pendingQuestions: number = 0;
		sequenceLen = Number(lines[i]);
		sequence = lines[++i];
		// nOfA = countChar(sequence, "A");
		// nOfQ = countChar(sequence, "Q");
		// console.log(nOfA);
		// console.log(nOfQ);
		for (let j of sequence) {
			// console.log(j);
			if (j === "Q") {
				pendingQuestions += 1;
			} else if (j === "A" && pendingQuestions > 0) {
				pendingQuestions -= 1;
			}
		}
		// console.log(pendingQuestions);
		if (pendingQuestions === 0) {
			console.log("Yes");
		} else {
			console.log("No");
		}
	}
}

let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	processTheSequence(input)
);
