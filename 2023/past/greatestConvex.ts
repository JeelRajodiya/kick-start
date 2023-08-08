import readline from "readline";
/*
You are given an integer k. Find the largest integer x, where 1≤x<k, such that x!+(x−1)!† is a multiple of ‡ k, or determine that no such x exists.

† y! denotes the factorial of y, which is defined recursively as y!=y⋅(y−1)! for y≥1 with the base case of 0!=1. For example, 5!=5⋅4⋅3⋅2⋅1⋅0!=120.

‡ If a and b are integers, then a is a multiple of b if there exists an integer c such that a=b⋅c. For example, 10 is a multiple of 5 but 9 is not a multiple of 6.

Input
The first line contains a single integer t (1≤t≤104) — the number of test cases. The description of test cases follows.

The only line of each test case contains a single integer k (2≤k≤109).

Output
For each test case output a single integer — the largest possible integer x that satisfies the conditions above.

If no such x exists, output −1.

Input:
4
3
6
8
10

Output:
2
5
7
9


*/

function factorial(n: number): number {
	if (n === 0) return 1;
	let factorial = 1;
	for (let i = 1; i <= n; i++) {
		factorial *= i;
	}
	return factorial;
}

function findThatNumber(n: number) {
	return factorial(n) + factorial(n - 1);
}
function greatestConvex(lines: string[]) {
	const testCases = Number(lines[0]);
	let k: number;
	// let x: number;
	let line: string;
	let flag: boolean;
	for (let i = 1; i <= testCases; i++) {
		// thatNumbers = [];
		line = lines[i];
		k = Number(line);
		flag = false;

		for (let x = k - 1; x > 0; x--) {
			// console.log(findThatNumber(x), x, k);
			if (findThatNumber(x) % k === 0) {
				console.log(x);
				flag = true;
				break;
				// break;
			}
		}
		if (!flag) {
			console.log(-1);
		}
	}
}

const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	greatestConvex(input);
});
