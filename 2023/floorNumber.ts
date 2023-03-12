import readline from "readline";
function floorNumber(lines: string[]) {
	const testCases: number = Number(lines[0]);
	let line1: string;
	let line2: string;
	for (let i = 1; i <= testCases; i++) {
		line1 = lines[i];
		let [petya, apartmentOnEachFloor] = line1.split(" ").map(Number);
		if (petya <= 2) {
			console.log(1);
		} else {
			let floor = Math.ceil((petya - 2) / apartmentOnEachFloor);
			console.log(floor + 1);
		}
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	floorNumber(input);
});
