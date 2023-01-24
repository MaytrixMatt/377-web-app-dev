num = 600851475143
highestPrimeFactor = 13
for i in range(num):
    if (not((i % 2 == 0) or (i % 3 == 0) or (i % 5 == 0))):
        if (num % i == 0):
            highestPrimeFactor = i
print(highestPrimeFactor)