// The wizard is sent to another clan as a spy to gather some valuable information about the war. After collecting the information he will send that information to the builder of the village. He sends the information in the form of string. For the security reasons he encoded the information in their secret language.

// According to the secret language, if the given message contains a subsequence heidi in it than the enemy will declare war against their village else not.

// You have to help builder by decoding the wizard's message.

// Input
// The first and only line of input contains a single nonempty string s
//  of length at most 1000
//  composed of lowercase letters (a-z).

// Output
// Output YES if the string s
//  contains heidi as a subsequence and NO otherwise.

import readline from "readline";
function secretInfo(lines: string[]) {
	const encodedMessage = lines[0];
	const decodedMessage = "heidi";
	let i = 0;
	let j = 0;
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
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	secretInfo(input);
});
