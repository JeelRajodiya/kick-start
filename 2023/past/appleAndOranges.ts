import readline from "readline";
/*
Problem
Rushitote went to a programming contest to distribute apples and oranges to the contestants.
He has NN apples and MM oranges, which need to be divided equally amongst the contestants. Find the maximum possible number of contestants such that:

Every contestant gets an equal number of apples; and
Every contestant gets an equal number of oranges.
Note that every fruit with Rushitote must be distributed, there cannot be any left over.

For example, 2 apples and 4 oranges can be distributed equally to two contestants, where each one receives 11 apple and 22 oranges.
However, 2 apples and 5 oranges can only be distributed equally to one contestant.

Input Format
The first line of input will contain a single integer TT, denoting the number of test cases.
The first and only line of each test case contains two space-separated integers NN and MM — the number of apples and oranges, respectively.
Output Format
For each test case, output on a new line the answer: the maximum number of contestants such that everyone receives an equal number of apples and an equal number of oranges.

Constraints
1 \leq T \leq 10001≤T≤1000
1 \leq N , M \leq 10^91≤N,M≤10 
9

input 
3
1 5
2 4
4 6

output
1
2
2

5 8 => 1
9 12 => 3
15 20 => 5
*/
// function findDivisors(n: number) {
// 	const divisors: number[] = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i === 0) {
// 			divisors.push(i);
// 		}
// 	}
// 	return divisors;
// }
// function findCommonDivisors(a: number, b: number) {
// 	const divisorsA: number[] = findDivisors(a);
// 	const divisorsB: number[] = findDivisors(b);
// 	const commonDivisors: number[] = [];
// 	for (let i = 0; i < divisorsA.length; i++) {
// 		for (let j = 0; j < divisorsB.length; j++) {
// 			if (divisorsA[i] !== 1 && divisorsA[i] === divisorsB[j]) {
// 				commonDivisors.push(divisorsA[i]);
// 			}
// 		}
// 	}
// 	return commonDivisors;
// }
function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}

function appleAndOranges(lines: string[]) {
	const testCases = Number(lines[0]);
	let apples: number;
	let oranges: number;
	let line: string[];
	for (let i = 1; i <= testCases; i++) {
		line = lines[i].split(" ");
		apples = Number(line[0]);
		oranges = Number(line[1]);
		console.log(gcd(apples, oranges));
	}
}

let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	appleAndOranges(input)
);
