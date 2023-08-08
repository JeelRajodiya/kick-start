"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function threeSwimmers(lines) {
	var testCases = Number(lines[0]);
	var line1;
	for (var i = 1; i <= testCases; i++) {
		line1 = lines[i];
		var _a = line1.split(" ").map(Number),
			p = _a[0],
			a = _a[1],
			b = _a[2],
			c = _a[3];
		if (p % a === 0 || p % b === 0 || p % c === 0) {
			console.log(0);
		} else {
			var min = Math.min(a - (p % a), b - (p % b), c - (p % c));
			console.log(min);
		}
	}
}

//
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	threeSwimmers(input);
});
