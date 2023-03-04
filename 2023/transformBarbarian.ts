/*
We want a barbarian to transform to some another barbarian. But not all barbarians can transform into any other barbarian. A barbarian with name s
 can transform to another barbarian with name t
 if s
 can be made equal to t
 by changing any vowel in s
 to any other vowel and any consonant in s
 to any other consonant. Multiple changes can be made.

In this problem, we consider the letters 'a', 'e', 'i', 'o' and 'u' to be vowels and rest to be consonants.

Given the names of two barbarians, determine if the barbarian with name s
 can be transformed to the barbarian with name t
.

Input
The first line contains the string s
 having length between 1
 and 1000
, inclusive.

The second line contains the string t
 having length between 1
 and 1000
, inclusive.

Both strings s
 and t
 are guaranteed to be different and consist of lowercase English letters only.

Output
Output "Yes" (without quotes) if the barbarian with name s
 can be transformed to the barbarian with name t
 and "No" (without quotes) otherwise.

You can print each letter in any case (upper or lower).

*/
import readline from "readline";

function isVowel(char: string) {
	return "aeiou".includes(char);
}
function transformBarbarian(lines: string[]) {
	const s = lines[0];
	const t = lines[1];
	if (s.length !== t.length) {
		console.log("No");
		return;
	}
	for (let i = 0; i < s.length; i++) {
		if (isVowel(s[i]) !== isVowel(t[i])) {
			console.log("No");
			return;
		}
	}
	console.log("Yes");
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	transformBarbarian(input);
});
