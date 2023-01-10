import readline from "readline";
/*
An array a is called ugly if it contains at least one element which is equal to the sum of all elements before it. If the array is not ugly, it is beautiful.

For example:

the array [6,3,9,6] is ugly: the element 9 is equal to 6+3;
the array [5,5,7] is ugly: the element 5 (the second one) is equal to 5;
the array [8,4,10,14] is beautiful: 8≠0, 4≠8, 10≠8+4, 14≠8+4+10, so there is no element which is equal to the sum of all elements before it.
You are given an array a such that 1≤a1≤a2≤⋯≤an≤100. You have to reorder the elements of a in such a way that the resulting array is beautiful. Note that you are not allowed to insert new elements or erase existing ones, you can only change the order of elements of a. You are allowed to keep the array a unchanged, if it is beautiful.

Input
The first line contains one integer t (1≤t≤2000) — the number of test cases.

Each test case consists of two lines. The first line contains one integer n (2≤n≤50). The second line contains n integers a1,a2,…,an (1≤a1≤a2≤⋯≤an≤100).

Output
For each test case, print the answer as follows:

if it is impossible to reorder the elements of a in such a way that it becomes beautiful, print NO;
otherwise, in the first line, print YES. In the second line, print n integers — any beautiful array which can be obtained from a by reordering its elements. If there are multiple such arrays, print any of them.

Input:

4
4
3 3 6 6
2
10 10
5
1 2 3 4 5
3
1 4 4

output:
YES
3 6 3 6
NO
YES
2 4 1 5 3
YES
1 4 4

*/

type answer = "NO";
function processArray(array: number[]): number[] | answer {
	let sum = array[0];
	let flag = true;
	let newArray: number[] = [];
	let skippedIndexes: number[] = [];
	newArray.push(array[0]);

	for (let i = 1; i < array.length; i++) {
		if (array[i] === sum) {
			skippedIndexes.push(i);
		} else {
			sum += array[i];
			newArray.push(array[i]);
		}
	}
	if (skippedIndexes.length === 0 && newArray.length !== array.length) {
		return "NO";
	}
	sum = newArray.reduce((a, b) => a + b);

	for (let i = 0; i < skippedIndexes.length; i++) {
		let element = array[skippedIndexes[i]];
		if (sum !== element) {
			newArray.push(element);
			sum += element;
		}
	}
	if (newArray.length === array.length) {
		return newArray;
	} else {
		return "NO";
	}
}
function makeitBeautiful(lines: string[]) {
	const testCases = Number(lines[0]);
	let n: number;
	let line: string;
	let array: number[];
	let sum: number;
	let flag: boolean;
	for (let i = 1; i <= testCases * 2; i++) {
		line = lines[i];
		n = Number(line);
		line = lines[i + 1];
		array = line.split(" ").map(Number);
		i++;
		let reordered = processArray(array);
		if (reordered == "NO") {
			console.log(reordered);
		} else {
			console.log("YES");
			console.log(reordered);
		}
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	makeitBeautiful(input);
});
