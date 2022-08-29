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
// 3 1 4 1 5 9 2 6 5
// 6
// 9 9 9 9 9 9

// Sample Output
// Case #1: 2
// Case #2: 1
// Case #3: 3
// Case #4: 0

declare var require: any;
declare var process: any;

function isFirstDay(index: number) {
	if (index == 0) {
		return true;
	}
	return false;
}

function isLastDay(index: number, maxDays: number): boolean {
	if (index === maxDays - 1) {
		return true;
	}

	return false;
}

function hasMaxCustThenBefore(customers: number[], index: number): boolean {
	let max = 0;

	for (let i of customers.slice(0, index)) {
		if (i > max) {
			max = i;
		}
	}
	if (max < customers[index]) {
		return true;
	}
	// console.log(max, customers[index]);
	return false;
}

function hasMaxCustThenAfter(customers: number[], index: number): boolean {
	let max = 0;

	for (let i of customers.slice(index + 1)) {
		if (i > max) {
			max = i;
		}
	}
	if (max < customers[index]) {
		// console.log(i, max, customers[index]);

		return true;
	}
	return false;
}

function countRecordBreakingDays(customers: number[]): number {
	/* 
    Record breaking day will follow both of these conditions
    => it's first day or it has more visitors then the previous days
    => it's last day or it has more visitors the the following days

    (isFirstDay(n) || hasMaxCustThenBefore(n)) && (isLastDay(n) || hasMaxCustThenAfter(n))
    */

	let recordBreakingDays = 0;
	customers.forEach((customer, index) => {
		console.log(
			isFirstDay(index),
			hasMaxCustThenBefore(customers, index),
			isLastDay(index, customers.length),
			hasMaxCustThenAfter(customers, index)
		);
		if (
			(isFirstDay(index) || hasMaxCustThenAfter(customers, index)) &&
			(isLastDay(index, customers.length) ||
				hasMaxCustThenBefore(customers, index))
		) {
			recordBreakingDays++;
		}
	});
	return recordBreakingDays;
}

// const readline = require("readline");
// let rl = readline.createInterface(process.stdin, process.stdout);
console.log(countRecordBreakingDays([4, 8, 15, 16, 23, 42]));
