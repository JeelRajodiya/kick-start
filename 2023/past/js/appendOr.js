"use strict";
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
exports.__esModule = true;
var readline_1 = require("readline");
function appendOr(lines) {
	var testCases = Number(lines[0]);
	var line1;
	var line2;
	var Y;
	var array;
	var X;
	var bitOrOfArray;
	var diff;
	for (var i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		Y = Number(line1.split(" ")[1]);
		array = line2.split(" ").map(function (a) {
			return Number(a);
		});
		bitOrOfArray = array.reduce(function (a, b) {
			return a | b;
		});
		diff = Y - bitOrOfArray;
		if ((diff | bitOrOfArray) === Y) {
			console.log(diff);
		} else {
			console.log(-1);
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	appendOr(input);
});
