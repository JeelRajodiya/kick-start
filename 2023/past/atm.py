testCases = int(input())
while testCases:
    line1 = input().split()
    n = int(line1[0])
    amount = int(line1[1])
    requiredMoney = map(lambda l: int(l), input().split())
    for i in requiredMoney:
        if amount >= i:
            amount -= i
            print(1, end="")
        else:
            print(0, end="")
    print()
    testCases -= 1
