number = 2520
while True: 
    counter = 0
    for i in range(11,21):
        if (number % i == 0):
            counter += 1
            continue
        else:
            number += 2520
            i = 11
    if (counter == 10):
        break
print(number)
# Solved Correctly