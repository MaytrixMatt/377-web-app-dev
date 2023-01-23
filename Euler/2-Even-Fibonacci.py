previousnum = 1
currentnum = 2
total = 0
while (currentnum <= 4000000):
    if currentnum % 2 == 0:
        total += currentnum
        var = previousnum + currentnum
        previousnum = currentnum
        currentnum = var
print (total)