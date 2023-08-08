"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function roadToZero(lines) {
	var testCases = Number(lines[0]);
	var line1;
	var line2;
	for (var i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		var _a = line1.split(" ").map(Number),
			x = _a[0],
			y = _a[1];
		var _b = line2.split(" ").map(Number),
			a = _b[0],
			b = _b[1];
		var cost = 0;
		var minOfXnY = Math.min(x, y);
		if (2 * a > b) {
			x -= minOfXnY;
			y -= minOfXnY;
			cost += b * minOfXnY;
			var maxOfXnY = Math.max(x, y);
			// console.log(maxOfXnY);
			cost += maxOfXnY * a;
		} else {
			cost = a * x + b * y;
		}
		console.log(cost);
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	roadToZero(input);
});
