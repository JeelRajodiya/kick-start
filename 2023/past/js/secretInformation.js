"use strict";
// The wizard is sent to another clan as a spy to gather some valuable information about the war. After collecting the information he will send that information to the builder of the village. He sends the information in the form of string. For the security reasons he encoded the information in their secret language.
exports.__esModule = true;
// According to the secret language, if the given message contains a subsequence heidi in it than the enemy will declare war against their village else not.
// You have to help builder by decoding the wizard's message.
// Input
// The first and only line of input contains a single nonempty string s
//  of length at most 1000
//  composed of lowercase letters (a-z).
// Output
// Output YES if the string s
//  contains heidi as a subsequence and NO otherwise.
var readline_1 = require("readline");
function secretInfo(lines) {
	var encodedMessage = lines[0];
	var decodedMessage = "heidi";
	var i = 0;
	var j = 0;
	while (i < encodedMessage.length && j < decodedMessage.length) {
		if (encodedMessage[i] === decodedMessage[j]) {
			i++;
			j++;
		} else {
			i++;
		}
	}
	if (j === decodedMessage.length) {
		console.log("YES");
		return;
	}
	console.log("NO");
	return;
}
var rl = readline_1.createInterface(process.stdin, process.stdout);
var input = [];
rl.on("line", function (line) {
	return input.push(line);
}).on("close", function () {
	secretInfo(input);
});
