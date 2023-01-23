num = 600851475143
possibilies = []
for i in range(num):
    if (not((i % 2 == 0) or (i % 3 == 0))):
        if (num/i % 1 == 0):
            possibilies.append(i)
print(possibilies.pop())