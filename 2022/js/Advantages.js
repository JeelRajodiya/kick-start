"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function calculateAdvantage(lines) {
	var testCases = Number(lines[0]);
	var strengths;
	var maxStrength;
	var secondMax;
	var strengthDifference = [];
	var arrayWithoutMax;
	for (var i = 1; i <= testCases; i++) {
		strengths = lines[i * 2].split(" ").map(function (x) {
			return Number(x);
		});
		maxStrength = Math.max.apply(Math, strengths);
		arrayWithoutMax = strengths.filter(function (x) {
			return x !== maxStrength;
		});
		if (arrayWithoutMax.length === 0) {
			arrayWithoutMax = strengths;
		}
		secondMax = Math.max.apply(Math, arrayWithoutMax);
		strengths.forEach(function (i) {
			if (i === maxStrength) {
				// console.log(i, secondMax);
				strengthDifference.push(i - secondMax);
			} else {
				strengthDifference.push(i - maxStrength);
			}
		});
		console.log(strengthDifference.join(" "));
		strengthDifference = [];
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	return calculateAdvantage(input);
});
