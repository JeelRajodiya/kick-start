"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function floorNumber(lines) {
	var testCases = Number(lines[0]);
	var line1;
	var line2;
	for (var i = 1; i <= testCases; i++) {
		line1 = lines[i];
		var _a = line1.split(" ").map(Number),
			petya = _a[0],
			apartmentOnEachFloor = _a[1];
		if (petya <= 2) {
			console.log(1);
		} else {
			var floor = Math.ceil((petya - 2) / apartmentOnEachFloor);
			console.log(floor + 1);
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	floorNumber(input);
});
