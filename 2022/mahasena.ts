/*
Problem:
Kattapa, as you all know was one of the greatest warriors of his time. The kingdom of
Maahishmati had never lost a battle under him (as army-chief), and the reason for that was their
really powerful army, also called as Mahasena.
Kattapa was known to be a very superstitious person. He believed that a soldier is "lucky" if the
soldier is holding an even number of weapons, and "unlucky" otherwise. He considered the
army as "READY FOR BATTLE" if the count of "lucky" soldiers is strictly greater than the count
of "unlucky" soldiers, and "NOT READY" otherwise.
Given the number of weapons each soldier is holding, your task is to determine whether the
army formed by all these soldiers is "READY FOR BATTLE" or "NOT READY".
Note: You can find the definition of an even number here.
Input:
The first line of input consists of a single integer N denoting the number of soldiers. The second
line of input consists of N space separated integers A1, A2, ..., AN, where Ai denotes the
number of weapons that the i th soldier is holding.
Output:
Generate one line output saying "READY FOR BATTLE", if the army satisfies the conditions that
Kattapa requires or "NOT READY" otherwise (quotes for clarity).
Example 1
Input:
1
1
Output:
NOT READY
Example 2
Input:
1
2
Output:
READY FOR BATTLE
Example 3
Input:
4
11 12 13 14
*/
// lucky => even
// unlucky => odd

let ipt = `1 
1
1
2
4
11 12 13 14
`;

function determineReadiness(n: number[]) {
	let luckySoldiers = 0;
	let unluckySoldier = 0;
	for (let i of n) {
		if (i % 2 === 0) {
			luckySoldiers += 1;
		} else {
			unluckySoldier += 1;
		}
	}

	if (luckySoldiers > unluckySoldier) {
		console.log("READY FOR BATTLE");
	} else {
		console.log("NOT READY");
	}
}

let lines = ipt.split("\n");
let lineStr: string[];
let lineNum: number[];
for (let i = 0; i < lines.length; i++) {
	if (i % 2 !== 0) {
		lineStr = lines[i].split(" ");
		lineNum = lineStr.map((i) => Number(i));
		determineReadiness(lineNum);
	}
}
