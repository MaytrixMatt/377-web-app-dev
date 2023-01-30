import math
def isPrime(x):
    for i in range(2,math.floor(math.sqrt(x))):
        if (x % i == 0):
            return False
    return True


primeNums = []
counter = 1
while(len(primeNums) != 10001):
    if(isPrime(counter)):
        primeNums.append(counter)
    counter += 1
print(primeNums[10000])