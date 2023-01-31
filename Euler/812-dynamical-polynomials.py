def dynamical_polynomials(n):
    mod=998244353
    result = 1
    for i in range(1, n + 1):
        result = result * i % mod
    return result

degree = 10000
print(dynamical_polynomials(degree))