/*
Problem
Chef is on his way to become the new big bull of the stock market but is a bit weak at calculating whether he made a profit or a loss on his deal.

Given that Chef bought the stock at value XX and sold it at value YY. Help him calculate whether he made a profit, loss, or was it a neutral deal.

Input Format
The first line of input will contain a single integer TT, denoting the number of test cases.
Each test case consists of a single line of input containing two space-separated integers XX and YY, denoting the value at which Chef bought and sold the stock respectively.
Output Format
For each test case, output PROFIT if Chef made a profit on the deal, LOSS if Chef incurred a loss on the deal, and NEUTRAL otherwise.

The checker is case-insensitive so answers like pROfiT, profit, and PROFIT would be considered the same.

Constraints
1 \leq T \leq 5001≤T≤500
1 \leq X, Y \leq 1001≤X,Y≤100
Sample 1:
Input
Output
4
4 2
8 8
3 4
2 1
LOSS
NEUTRAL
PROFIT
LOSS
*/
declare var require: any;
declare var process: any;

const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function precessInput(lines: string[]) {
	let testCases = parseInt(lines[0]);
	for (let i = 1; i <= testCases; i++) {
		let [buy, sell] = lines[i].split(" ").map((x: string) => parseInt(x));
		if (buy > sell) {
			console.log("LOSS");
		} else if (buy < sell) {
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
