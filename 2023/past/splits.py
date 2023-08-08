t = input()
for i in range(int(t)):
	n = input()
	s = input()
	a = 0
	for i in s:
		if i == "A":
			a += 1
	l = []
	j = -1
	for i in range(a):
		l.append(0)
	for i in s:
		if i == "A":
			j += 1
		elif i == "P" and j >= 0:

			l[j] += 1
	ans = 0
	ans = max(l)
	print(ans)