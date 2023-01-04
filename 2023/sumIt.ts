import readline from "readline";
function sumIt(lines: string[]) {
	const testCases = Number(lines[0]);
	let line: string[];
	let sum: number;
	let a: number;
	let b: number;
	for (let i = 1; i <= testCases; i++) {
		line = lines[i].split(" ");
		sum = 0;
		a = Number(line[0]);
		b = Number(line[1]);
		sum = a + b;
		if (sum === Number(line[2])) {
			console.log("YES");
		} else {
			console.log("NO");
		}
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => sumIt(input));
