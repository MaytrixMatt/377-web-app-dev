previousnum = 0
currentnum = 1
total = 0
while (currentnum < 4000000):
    if ((currentnum + previousnum) % 2):
        total += (currentnum + previousnum)
    previousnum = currentnum
    currentnum = (currentnum + previousnum)
print (total)
