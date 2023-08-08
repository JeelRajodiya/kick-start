/*
AquaMoon has a string a consisting of only 0 and 1. She wants to add + and − between all pairs of consecutive positions to make the absolute value of the resulting expression as small as possible. Can you help her?

Input
The first line contains a single integer t (1≤t≤2000)  – the number of test cases. The description of test cases follows.

The first line of each test case contains a single integer n (2≤n≤100) — the length of a.

The second line of each test case contains a string a of length n, consisting of only 0 and 1.

Output
For each test case, output a string of length n−1 consisting of − and + on a separate line. If there is more than one assignment of signs that produces the smallest possible absolute value, any of them is accepted.


Input:
3
2
11
5
01101
5
10001

Output:
-
+-++
+++-

Note
In the first test case, we can get the expression 1−1=0, with absolute value 0.

In the second test case, we can get the expression 0+1−1+0+1=1, with absolute value 1.

In the third test case, we can get the expression 1+0+0+0−1=0, with absolute value 0.
*/
import readline from "readline";

function calculateAbsolute(mainString: string, result: string) {
	let absolute = 0;
	let sign: number;
	absolute = absolute + Number(mainString[0]);
	for (let i = 1; i < mainString.length; i++) {
		sign = result[i - 1] == "+" ? 1 : -1;
		absolute = absolute + Number(mainString[i]) * sign;
	}
	console.log(absolute);
	return absolute;
}

function addPlusMinus(lines: string[]): void {
	const testCases: number = Number(lines[0]);
	let mainString: string;
	let finalString: string;
	let absolute;
	let char: number;
	for (let i = 1; i <= testCases * 2; i++) {
		finalString = "";
		mainString = lines[++i];
		absolute = 0;
		for (let i = 0; i < mainString.length; i++) {
			char = Number(mainString[i]);
			// absolute += char;
			if (absolute + char > 1) {
				absolute -= char;
				finalString += "-";
			} else {
				absolute += char;
				finalString += "+";
			}
		}
		console.log(finalString.slice(1));
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	addPlusMinus(input)
);

// calculateAbsolute("10001", "-++-");
