const ipt = `4
1 1 0 0
0 0 0 0
0 0 0 1
1 1 1 1`;

type result = "IN" | "OUT";
function InOrOut(l: number[]): result {
	let total = 0;
	for (let i of l) {
		total += i;
	}
	if (total === 0) {
		return "IN";
	} else {
		return "OUT";
	}
}
function main(s: string) {
	let lines = s.split("\n");
	let pointer = 0;
	let totalCases = Number(lines[pointer++]);

	let strLine: string[];
	let line: number[];
	for (; pointer <= totalCases; pointer++) {
		strLine = lines[pointer].split(" ");
		line = strLine.map((i) => Number(i));
		console.log(`Case#${pointer}: ${InOrOut(line)}`);
	}
}
main(ipt);
