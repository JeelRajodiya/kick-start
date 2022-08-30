// a girl is given number of visitors at her store on N Days
// number of visitors on i-th day is V(i)
// A day is record breaking if it satisfies both of the following conditions:
// Either it is the first day, or the number of visitors on the day is strictly larger than the number of visitors on each of the previous days.
// Either it is the last day, or the number of visitors on the day is strictly larger than the number of visitors on the following day.

// find the number of record breaking days
// first line gives T = total no. of test cases
// test line 1 => N (total days)
// test line 2 => V(i) (total no of visitors on i-th day)
// output: Case #x: y, where x is the test case number (starting from 1) and y is the number of record breaking days.

// sample input
// 4
// 8  < days
// 1 2 0 7 2 0 2 0  < no of customers
// 6
// 4 8 15 16 23 42
// 9
//[ 3, 1 ,4 ,1 ,5 ,9 ,2 ,6 ,5]
// 6
// 9 9 9 9 9 9

// Sample Output
// Case #1: 2
// Case #2: 1
// Case #3: 3
// Case #4: 0

declare var require: any;
declare var process: any;

function hasMaxCustThenBefore(slice: number[], day: number): boolean {
	let max = Math.max(...slice);

	if (max < day) {
		return true;
	} else {
		return false;
	}
}

function hasMaxCustThenAfter(
	customers: number[],
	index: number,
	day: number
): boolean {
	// we only have to check for the next day. not all of the following days
	if (customers[index + 1] < day) {
		return true;
	} else {
		return false;
	}
}

function countRecordBreakingDays(customers: number[]): number {
	/* 
    Record breaking day will follow both of these conditions
    => it's first day or it has more visitors then the previous days
    => it's last day or it has more visitors the the following days

    (isFirstDay(n) || hasMaxCustThenBefore(n)) && (isLastDay(n) || hasMaxCustThenAfter(n))
    */
	let length = customers.length;
	let recordBreakingDays = 0;
	let slice: number[] = [];
	customers.forEach((day, index) => {
		if (
			(index === 0 || hasMaxCustThenBefore(slice, day)) &&
			(index === length - 1 || hasMaxCustThenAfter(customers, index, day))
		) {
			recordBreakingDays++;
		}
		slice.push(customers[index]);
	});
	return recordBreakingDays;
}

function handleData(input: string[]) {
	const totalTests = Number(input[0]);
	let test = 1;
	for (; test <= totalTests; test++) {
		let customersPerDay = input[test * 2].split(" ").map((s) => Number(s));

		let recordBreakingDays = countRecordBreakingDays(customersPerDay);

		console.log(`Case #${test}: ${recordBreakingDays}`);
	}
}

const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);
let input: string[] = [];
// takes 10 ms need to reduce 1/5 time => 2 ms
rl.on("line", (line: string) => input.push(line)).on("close", () => {
	// console.time("Total");
	handleData(input);
	// console.timeEnd("Total");
});

// times => 1:38
//
