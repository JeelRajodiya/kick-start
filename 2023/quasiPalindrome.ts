import readline from "readline";

function isPalindrome(str: string): boolean {
	let reversedStr = str.split("").reverse().join("");
	return str === reversedStr;
}

function quasiPalindrome(lines: string[]) {
	let ipt = lines[0];
	ipt = ipt.replace(/^0+|0+$/g, "");
	let isQuasi = isPalindrome(ipt);
	if (isQuasi) {
		console.log("YES");
	} else {
		console.log("NO");
	}
}
const rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () => {
	quasiPalindrome(input);
});
