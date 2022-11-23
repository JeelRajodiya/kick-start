"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var yesMap = {
	Y: "e",
	e: "s",
	s: "Y",
};
function isValidSubString(s) {
	if (s === "Y" || s === "e" || s === "s") {
		return true;
	}
	return false;
}
function findYesSubString(lines) {
	var testCases = Number(lines[0]);
	var mainString;
	var isPartOfYes;
	for (var i = 1; i <= testCases; i++) {
		isPartOfYes = false;
		mainString = lines[i];
		var char = void 0;
		// mainString = mainString.replace("Yes", "");
		for (var j = 0; j < mainString.length; j++) {
			char = mainString[j];
			if (mainString.length === 1 && isValidSubString(char)) {
				isPartOfYes = true;
				break;
			}
			if (mainString.length === j + 1) {
				break;
			}
			// console.log(i, mainString, yesMap[char], mainString[j + 1], char);
			if (isValidSubString(char) && yesMap[char] === mainString[j + 1]) {
				isPartOfYes = true;
			} else {
				isPartOfYes = false;
				break;
			}
		}
		if (isPartOfYes) {
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
	return findYesSubString(input);
});
var a = "s";
