"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function processArray(array) {
	var sum = array[0];
	var flag = true;
	var newArray = [];
	var skippedIndexes = [];
	newArray.push(array[0]);
	for (var i = 1; i < array.length; i++) {
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
	sum = newArray.reduce(function (a, b) {
		return a + b;
	});
	for (var i = 0; i < skippedIndexes.length; i++) {
		var element = array[skippedIndexes[i]];
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
function makeitBeautiful(lines) {
	var testCases = Number(lines[0]);
	var n;
	var line;
	var array;
	var sum;
	var flag;
	for (var i = 1; i <= testCases * 2; i++) {
		line = lines[i];
		n = Number(line);
		line = lines[i + 1];
		array = line.split(" ").map(Number);
		i++;
		var reordered = processArray(array);
		if (reordered == "NO") {
			console.log(reordered);
		} else {
			console.log("YES");
			console.log(reordered);
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	makeitBeautiful(input);
});
