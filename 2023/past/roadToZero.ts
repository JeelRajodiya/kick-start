import readline from "readline";
function roadToZero(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;
	for (let i = 1; i <= testCases * 2; i++) {
		line1 = lines[i];
		line2 = lines[++i];
		let [x, y] = line1.split(" ").map(Number);
		let [a, b] = line2.split(" ").map(Number);
		let cost: number = 0;
		let minOfXnY = Math.min(x, y);
		if (2 * a > b) {
			x -= minOfXnY;
			y -= minOfXnY;
			cost += b * minOfXnY;
			let maxOfXnY = Math.max(x, y);
			console.log(maxOfXnY, x, y);
			cost += maxOfXnY * a;
		} else {
			cost = a * x + b * y;
		}
		console.log(cost);
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	roadToZero(input);
});
