# Tenzing and Tsondu playing card game
# Tsondu -> n monsters -> abilities a1, a2, a3, a4, a5 ..
# Tenzing -> m monsters -> abilities b1, b2, b3, b4, b5 ..

#Tsondu makes first move

t = int(input())
while t > 0:
    t -= 1
    input()
    aS = sum(list(map(int, input().split())))
    bS = sum(list(map(int, input().split())))
    if aS > bS:
        print("Tsondu")
    elif bS > aS:
        print("Tenzing")
    else:
        print("Draw")
