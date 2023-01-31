num1 = 1 
num2 = 1
counter = 2
while len(str(num1)) != 1000:
    temp = num1
    num1 = num1 + num2
    num2 = temp
    counter += 1
print(counter)