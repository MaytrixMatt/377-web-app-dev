number = 2520
for i in range(11,21):
    if not(number % i == 0):
        number = number * ((number % i))
print(number)
print(2520 % 13)