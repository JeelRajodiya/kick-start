"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function doOrinString(str1, str2) {
	var result = "";
	for (var i = 0; i < str1.length; i++) {
		result += String(Number(Number(str1[i]) | Number(str2[i])));
	}
	return result;
}
function stringSimilarity(lines) {
	var testCases = Number(lines[0]);
	var n;
	var binString;
	var listOfAllBinStrings = [];
	for (var i = 1; i <= testCases * 2; i++) {
		n = Number(lines[i]);
		binString = lines[++i];
		listOfAllBinStrings = [];
		// let distance = n-1
		for (var j = 0; j + n <= 2 * n - 1; j++) {
			listOfAllBinStrings.push(binString.slice(j, j + n));
		}
		console.log(
			listOfAllBinStrings.reduce(function (a, b) {
				return doOrinString(a, b);
			})
		);
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	stringSimilarity(input);
});
/*
4
1
1
3
00000
4
1110000
2
101

*/
