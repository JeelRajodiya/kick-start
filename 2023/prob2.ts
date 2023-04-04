const readline = require("readline");
function ballGame(lines: string[]) {
	const n: number = Number(lines[0]);
	let c: number;
	let a = 1;
	let b = 1;
	let result: number[] = [];
	for (let i = 0; i < n - 1; i++) {
		c = a + b;
		if (c > n) {
			c = c - a;
		}
		console.log(c, b);
		result.push(c);
		a = c;
		b = b + 1;
	}
	console.log(result);
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line: string) => input.push(line)).on("close", () => {
	ballGame(input);
});
