"use strict";
/*
5
4
QQAA
4
QQAQ
3
QAA
1
Q
14
QAQQAQAAQQQAAA

Yes
No
Yes
No
Yes

*/
exports.__esModule = true;
var readline_1 = require("readline");
function countChar(s, char) {
	var count = 0;
	for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
		var i = s_1[_i];
		if (i === char) {
			count++;
		}
	}
	return count;
}
function processTheSequence(lines) {
	var testCases = Number(lines[0]) * 2;
	var sequenceLen;
	var sequence;
	// let nOfQ: number;
	// let nOfA: number;
	for (var i = 1; i < testCases; i++) {
		var pendingQuestions = 0;
		sequenceLen = Number(lines[i]);
		sequence = lines[++i];
		// nOfA = countChar(sequence, "A");
		// nOfQ = countChar(sequence, "Q");
		// console.log(nOfA);
		// console.log(nOfQ);
		for (var _i = 0, sequence_1 = sequence; _i < sequence_1.length; _i++) {
			var j = sequence_1[_i];
			// console.log(j);
			if (j === "Q") {
				pendingQuestions += 1;
			} else if (j === "A" && pendingQuestions > 0) {
				pendingQuestions -= 1;
			}
		}
		// console.log(pendingQuestions);
		if (pendingQuestions === 0) {
			console.log("Yes");
		} else {
			console.log("No");
		}
	}
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	return processTheSequence(input);
});
