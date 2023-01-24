import math
num = 600851475143
limit = math.floor(math.sqrt(num))
highestPrimeFactor = 0
for i in range(limit):
    if (not((i % 2 == 0) or (i % 3 == 0) or (i % 5 == 0))):
        if (num % i == 0):
            highestPrimeFactor = i
print(highestPrimeFactor)