const readline = require("readline");
function printIt(lines) {
	for (let i = 0; i < lines.length; i++) {
		console.log(lines[i]);
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input = [];
rl.on("line", (line) => input.push(line)).on("close", () => printIt(input));
