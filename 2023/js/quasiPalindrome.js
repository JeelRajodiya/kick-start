"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
function isPalindrome(str) {
	var reversedStr = str.split("").reverse().join("");
	return str === reversedStr;
}
function quasiPalindrome(lines) {
	var ipt = lines[0];
	ipt = ipt.replace(/^0+|0+$/g, "");
	var isQuasi = isPalindrome(ipt);
	if (isQuasi) {
		console.log("YES");
	} else {
		console.log("NO");
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	quasiPalindrome(input);
});
