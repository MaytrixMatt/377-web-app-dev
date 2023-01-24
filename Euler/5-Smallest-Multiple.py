number = 2520
while True: 
    for i in range(11,21):
        if (number % i == 0):
            continue
        else:
            number += 2520
            i = 11
    break
print(number)