import readline from "readline";
function threeSwimmers(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	for (let i = 1; i <= testCases; i++) {
		line1 = lines[i];
		let [p, a, b, c] = line1.split(" ").map(Number);
		if (p % a === 0 || p % b === 0 || p % c === 0) {
			console.log(0);
		} else {
			let min = Math.min(a - (p % a), b - (p % b), c - (p % c));
			console.log(min);
		}
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	threeSwimmers(input);
});
