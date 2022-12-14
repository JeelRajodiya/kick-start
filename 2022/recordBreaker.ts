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

function countRecordBreakingDays(customers: number[]): number {
	/* 
    Record breaking day will follow both of these conditions
    => it's first day or it has more visitors then the previous days
    => it's last day or it has more visitors the the following days

    (isFirstDay(n) || hasMaxCustThenBefore(n)) && (isLastDay(n) || hasMaxCustThenAfter(n))
    */
	let recordBreakingDays = 0;
	let previousRecord: number = 0;
	customers.forEach((day, index) => {
		if (
			(index === 0 || previousRecord < day) &&
			(index === length - 1 || customers[index + 1] < day)
		) {
			recordBreakingDays++;
		}
		previousRecord = Math.max(day, previousRecord);
	});
	return recordBreakingDays;
}

function handleData(input: string[]) {
	input = input.slice(1);

	let test = 1;
	let isChunked = false;
	let length = 0;
	input.forEach((line) => {
		if (isChunked) {
			let customersPerDay = line.split(" ").map((s) => Number(s));

			let recordBreakingDays = countRecordBreakingDays(customersPerDay);

			console.log(`Case #${test}: ${recordBreakingDays}`);
			test++;
			isChunked = false;
		} else {
			length = Number(line);
			isChunked = true;
		}
	});
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
