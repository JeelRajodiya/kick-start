/*

Problem:
A study has shown that playing a musical instrument helps in increasing one's IQ by 7 points.
Chef knows he can't beat Einstein in physics, but he wants to try to beat him in an IQ
competition.
You know that Einstein had an IQ of 170, and Chef currently has an IQ of X.
Determine if, after learning to play a musical instrument, Chef's IQ will become strictly greater
than Einstein's.
Print "Yes" if it is possible for Chef to beat Einstein, else print "No" (without quotes).
You may print each character of the string in either uppercase or lowercase (for example, the
strings yEs, yes, Yes, and YES will all be treated as identical).
Input Format:
● The first and only line of input will contain a single integer X, the current IQ of Chef.
Output Format:
● For each testcase, output in a single line "Yes" or "No"
● You may print each character of the string in either uppercase or lowercase (for
example, the strings yEs, yes, Yes, and YES will all be treated as identical).
Subtasks:
Subtask #1 (100 points): Original constraints
Sample 1:
INPUT:
165
OUTPUT:
Yes
Sample 2:
INPUT:
120
OUTPUT:
NO
*/
import readline from "readline";
// import chalk from "chalk";
let rl = readline.createInterface(process.stdin, process.stdout);

function chefBeats(n: number): void {
	if (n + 7 > 170) {
		console.log("OUTPUT: Yes");
	} else {
		console.log("OUTPUT: No");
	}
	process.stdout.write("INPUT:");
}
process.stdout.write("INPUT:");
rl.on("line", (line) => chefBeats(Number(line)));
