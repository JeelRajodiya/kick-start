import sys


def threeSwimmers(lines):
	testCases = int(lines[0])
	for i in range(1, testCases + 1):
		line1 = lines[i]
		p, a, b, c = map(int, line1.split())
		if p % a == 0 or p % b == 0 or p % c == 0:
			print(0)  #print statement
		else:
			minV = min(a - (p % a), b - (p % b), c - (p % c))
			print(minV)  #print statement


lines = []
for line in sys.stdin:
	lines.append(line.strip())
threeSwimmers(lines)