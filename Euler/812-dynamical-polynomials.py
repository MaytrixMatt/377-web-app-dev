degree = 5
mod = 998244353
num_poly = 1
for i in range(1, degree + 1):
    num_poly = (num_poly * (i + degree))
print(num_poly)
