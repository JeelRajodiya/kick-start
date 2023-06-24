from typing import List

t = int(input())
# t = 0


def generateOrCombinations(arr) -> List[int]:
    result = []
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            result.append(arr[i] | arr[j])

    return result


while t > 0:
    n, x = map(int, input().split())
    stack1: List[int] = list(map(int, input().split()))
    stack2: List[int] = list(map(int, input().split()))
    stack3: List[int] = list(map(int, input().split()))
    knowledge = 0

    if stack1[0] == x or stack2[0] == x or stack3[0] == x:
        print("Yes")
        continue

    for i in range(n):
        a = (stack1[i])
        b = (stack2[i])
        c = (stack3[i])
        k1 = a | b
        k2 = b | c
        k3 = a | c
        k = a | b | c
        knowledge += k
        if k1 == x or k2 == x or k3 == x or knowledge == x:
            print("Yes")
            break
        possibleCombinations = generateOrCombinations([a, b, c])
        for j in possibleCombinations:
            if j == x:
                print("Yes")
                break
        possibleCombinations = generateOrCombinations(possibleCombinations)
        for j in possibleCombinations:
            if j == x:
                print("Yes")
                break
        else:
            print("No")
