const readline = require("readline");
function Fitness(lines: string[]) {
	const testCases: number = Number(lines[0]);

	for (let i = 1; i <= testCases; i++) {
		console.log(Number(lines[i]) * 2 * 5);
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line: string) => input.push(line)).on("close", () => {
	Fitness(input);
});
