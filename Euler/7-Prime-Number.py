import math
def isPrime(x):
    for i in range(2,(math.ceil(math.sqrt(x)) + 2)):
        if (x % i == 0):
            return False
    return True


primeNums = []
counter = 1
while(len(primeNums) != 10000):
    if(isPrime(counter)):
        primeNums.append(counter)
    counter += 1
print(primeNums.pop())
# Solved Correctly