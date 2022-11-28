// https://codeforces.com/problemset/problem/1760/C?csrf_token=af18317e99752e99ee2be09db18f5b45&f0a28=1
import readline from "readline";
function calculateAdvantage(lines: string[]): void {
	const testCases: number = Number(lines[0]);
	let strengths: number[];
	let maxStrength: number;
	let secondMax: number;
	let strengthDifference: number[] = [];
	let arrayWithoutMax: number[];
	for (let i = 1; i <= testCases; i++) {
		strengths = lines[i * 2].split(" ").map((x) => Number(x));
		maxStrength = Math.max(...strengths);
		arrayWithoutMax = strengths.filter((x) => x !== maxStrength);
		if (arrayWithoutMax.length === 0) {
			arrayWithoutMax = strengths;
		}
		secondMax = Math.max(...arrayWithoutMax);
		strengths.forEach((i) => {
			if (i === maxStrength) {
				// console.log(i, secondMax);
				strengthDifference.push(i - secondMax);
			} else {
				strengthDifference.push(i - maxStrength);
			}
		});

		console.log(strengthDifference.join(" "));
		strengthDifference = [];
	}
}

let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	calculateAdvantage(input)
);
// I will create conflict Yay
