const readline = require("readline");
function tower(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;
	for (let i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	tower(input);
});
