import readline from "readline";
function findMex(lines: string[]) {
	const len = Number(lines[0]);
	const arr: number[] = lines[1].split(" ").map(Number);

	const maxVal = Math.max(...arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] - 1 > 0) {
			arr.push(arr[i] - 1);
		}
	}
	for (let i = 1; i < maxVal + 1; i++) {
		// console.log(!arr.includes(i), i);
		if (!arr.includes(i)) {
			console.log(i);
			break;
		}
	}
	console.log(arr);
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	findMex(input);
});
