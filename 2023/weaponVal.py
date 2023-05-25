def nandStrings(str1: str, str2: str) -> str:
    nand_result = ""
    for i in range(len(str1)):
        if str1[i] == "1" and str2[i] == "1":
            nand_result += "0"
        elif str1[i] == "0" and str2[i] == "0":
            nand_result += "0"
        else:
            nand_result += "1"
    return nand_result


def countOnes(strS) -> int:
    ones = 0
    for i in strS:
        if i == "1":
            ones += 1
    return ones


testCases = int(input())
while testCases:
    lines = int(input())
    str1 = input()
    for i in range(lines - 1):
        str2 = input()
        str1 = nandStrings(str1, str2)
    print(countOnes(str1))
    tastCases -= 1

# 0101101011
#

# n = nandStrings("0100100110", "0000000011")
# print(n)
