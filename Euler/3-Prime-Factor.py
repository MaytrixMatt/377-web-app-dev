import math
def isPrime(x):
    for i in range(2,math.floor(math.sqrt(x))):
        if (x % i == 0):
            return False
    return True

num = 600851475143
limit = math.floor(math.sqrt(num))
highestPrimeFactor = 0

for i in range(2,limit):
    if (num % i == 0 and isPrime(i)) :
        highestPrimeFactor = i
print(highestPrimeFactor)
# Solved Correctly