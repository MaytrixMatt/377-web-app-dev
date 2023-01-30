import math
sum = 10000
a = 0
b = 0
c = 0
for i in range(math.floor(sum/3)):
    for j in range(math.floor(sum/3)):
        for k in range(math.floor(sum/3)):
            if((i + j + k == sum) and ((a*a) + (b*b) == (c*c))):
                print(a*b*c)
                quit