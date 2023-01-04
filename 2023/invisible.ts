import readline from "readline";
/*
Problem
Alice thinks Bob has very weak math skills.
Alice gave Bob three numbers A, B, and C and challenged him to find any positive integer K 
strictly less than 100 such that none of the three numbers are divisible by K.

Help Bob find one such integer K.

Under the given constraints, a valid KKwill always exist.

Input Format
The first line of input will contain a single integer T, denoting the number of test cases.
The first and only line of each test case contains three space-separated integers A, B, and C.
Output Format
For each test case, output on a new line any positive integer K less than 100100 that does not divide any of A, B or C.

Constraints
1 \leq T \leq 10001≤T≤1000
2 \leq A , B , C \leq 1002≤A,B,C≤100

input
3
2 3 4
5 7 10
3 6 9

output
5
4
10
*/

function invisible(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line: string[];
	let a: number;
	let b: number;
	let c: number;
	let k: number;
	for (let i = 1; i <= testCases; i++) {
		line = lines[i].split(" ");
		a = Number(line[0]);
		b = Number(line[1]);
		c = Number(line[2]);
		k = 2;
		while (k < 100) {
			if (a % k !== 0 && b % k !== 0 && c % k !== 0) {
				console.log(k);
				break;
			}
			k++;
		}
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => invisible(input));
