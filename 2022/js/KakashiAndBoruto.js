"use strict";
exports.__esModule = true;
/*
After serving for several years to Konoha, now Kakashi senpai wants to explore a career in the coding field and to do that first he needs to learn the binary language where Boruto is helping his boomer sensei.

Now to test Kakashi's learning Boruto decided to take a test of Kakashi where he will be giving him a sequence of 8 bits and Kakashi has to tell Boruto if it's a valid binary number or not.

A Valid binary number has all the digits either 0 or 1. If the condition is not satisfied then the number is not a valid binary number.

Your task is to help to Kakashi senpai with this task to save his image in front of Boruto.

Input
The input consists of a single line, containing 8 integers N1,N2,N3,N4,N5,N6,N7 and N8, indicating the values read by the device (Ni is between 0 and 9 for 1≤i≤8).

Output
Print a single line containing the capital letter 'S' if it is a valid binary number successfully; otherwise print a single line containing the capital letter 'F', corresponding to a failure.
*/
var readline = require("readline");
function checkIfBinary(lines) {
	var splittedLine = [];
	var isBinary = false;
	// let character:string
	var i;
	lines.forEach(function (line) {
		line = line.trim();
		splittedLine = line.split(" ");
		for (var i = 0; i < splittedLine.length; i++) {
			var character = splittedLine[i];
			// character = splittedLine[i]
			// console.log(i);
			if (character === "0" || character === "1") {
				isBinary = true;
			} else {
				isBinary = false;
				break;
			}
		}
		if (isBinary) {
			console.log("S");
		} else {
			console.log("F");
		}
	});
}
var rl = readline.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	return checkIfBinary(input);
});
