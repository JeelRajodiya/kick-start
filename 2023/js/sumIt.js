"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function sumIt(lines) {
	var testCases = Number(lines[0]);
	var line;
	var sum;
	var a;
	var b;
	for (var i = 1; i <= testCases; i++) {
		line = lines[i].split(" ");
		sum = 0;
		a = Number(line[0]);
		b = Number(line[1]);
		sum = a + b;
		if (sum === Number(line[2])) {
			console.log("YES");
		} else {
			console.log("NO");
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	return sumIt(input);
});
