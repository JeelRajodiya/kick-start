"use strict";
exports.__esModule = true;
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
var readline_1 = require("readline");
function calculateAbsolute(mainString, result) {
	var absolute = 0;
	var sign;
	absolute = absolute + Number(mainString[0]);
	for (var i = 1; i < mainString.length; i++) {
		sign = result[i - 1] == "+" ? 1 : -1;
		absolute = absolute + Number(mainString[i]) * sign;
	}
	console.log(absolute);
	return absolute;
}
function addPlusMinus(lines) {
	var testCases = Number(lines[0]);
	var mainString;
	var finalString;
	var absolute;
	var char;
	for (var i = 1; i <= testCases * 2; i++) {
		finalString = "";
		mainString = lines[++i];
		absolute = 0;
		for (var i_1 = 0; i_1 < mainString.length; i_1++) {
			char = Number(mainString[i_1]);
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
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	return addPlusMinus(input);
});
// calculateAbsolute("10001", "-++-");
