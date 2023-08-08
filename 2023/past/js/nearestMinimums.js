"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function nearestMinimums(lines) {
	var n = Number(lines[0]);
	var arr = lines[1].split(" ").map(Number);
	var min = Math.min.apply(Math, arr);
	var minIndexes = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === min) {
			minIndexes.push(i);
		}
	}
	var minDistance = Infinity;
	for (var i = 0; i < minIndexes.length - 1; i++) {
		var distance = minIndexes[i + 1] - minIndexes[i];
		if (distance < minDistance) {
			minDistance = distance;
		}
	}
	console.log(minDistance);
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	nearestMinimums(input);
});
