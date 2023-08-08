def meet_mary(a, b):
    if a == b:
        # Ian is already at Mary's position
        return [(a, b)]

    if a > b:
        # Ian needs to jump in the positive y-direction
        # and then in the positive x-direction
        return [(0, b), (a, b)]

    # Ian needs to jump in the positive x-direction
    # and then in the positive y-direction
    return [(a, 0), (a, b)]


t = int(input())  # number of test cases

for _ in range(t):
    a, b = map(int, input().split())
    result = meet_mary(a, b)
    print(len(result))  # number of jumps
    for point in result:
        print(point[0], point[1])  # jump coordinates
