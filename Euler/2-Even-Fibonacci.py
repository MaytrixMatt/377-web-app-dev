previousnum = 0
currentnum = 1
total = 0
while (currentnum <= 4000000):
    var = previousnum + currentnum
    previousnum = currentnum
    currentnum = var
    if currentnum % 2 == 0:
        total += currentnum
print(total)
# Solved Correctly