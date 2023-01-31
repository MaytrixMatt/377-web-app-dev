import math

def pythagorean_triple(n):
    triples = set()
    m = 2
    while len(triples) < n:
        for k in range(1, m):
            a = m * m - k * k
            b = 2 * m * k
            c = m * m + k * k
            triples.add(a + b + c)
        m += 1
    return min(triples)

n = int(input("Enter n: "))
print("Smallest number in", n, "Pythagorean triples:", pythagorean_triple(n))
