/*
Problem
Chef has planned that he will drink exactly X liters of tea daily. He has an empty jar having a
capacity of Y liters.
Chef can visit the tea shop to refill the jar. In each refill, the jar is completely filled to the brim
and Chef is charged Z rupees.
Chef wonders what is the minimum amount of money he has to pay for drinking exactly X liters
of tea daily.
Input Format
● First line will contain T, number of test cases. Then the test cases follow.
● Each test case contains of a single line of input, three space-separated integers X, Y,
and Z denoting the amount of tea Chef has to drink daily, the capacity of his jar and the
cost of refilling his jar.
Output Format
● For each test case, output in a single line, the minimum amount Chef has to pay.
Input
4
3 3 3
6 3 3
5 7 2
9 4 5
Output
3
6
2
15
Explanation:
Test case 1: Chef can get his jar refilled once and drink 3 liters of tea, which will cost him 3
rupees in total.
Test case 2: Chef needs to refill his jar twice to get 3⋅2=6 liters of tea, which will cost him 3⋅2=6
rupees in total.
Test case 3: Chef can refill his jar once and drink exactly 5 liters out of the 7 liters. This will cost
him 2 rupees.
Test case 4: Chef can refill his jar twice and drink 4⋅2=8 liters of tea. He needs to have one
more refill, but this time he would drink only 1 liter tea from the jar. Thus the total tea he drinks is
4+4+1 = 9 liters. He made 3 refills in total costing him 5. 3 = 15 rupees.
*/

/*
X liters of Tea will drink
Y liter of capacity
Z rupees is charged for each refill

price = Math.celi(Y/X) * Z

*/
import readline from "readline";
function calcChargeForTea(input: string[]) {
	let pointer = 0;
	const tests: number = Number(input[pointer++]);

	let l: string[];
	let requiredTea: number;
	let cupCapacity: number;
	let chargePerCup: number;
	let totalCharge: number;

	for (; pointer <= tests; pointer++) {
		l = input[pointer].split(" ");
		requiredTea = Number(l[0]);
		cupCapacity = Number(l[1]);
		chargePerCup = Number(l[2]);
		// console.log(cupCapacity, requiredTea, chargePerCup);
		totalCharge = Math.ceil(requiredTea / cupCapacity) * chargePerCup;
		console.log(totalCharge);
	}
}
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
rl.on("line", (line) => input.push(line)).on("close", () =>
	calcChargeForTea(input)
);
// Tag Test
// C8
