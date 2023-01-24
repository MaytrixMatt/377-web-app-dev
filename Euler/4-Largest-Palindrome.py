largest = 1001

def checkPalindrome(x):
    for digit in range(len(x)):
        if(x[digit] == x[len(x) - (digit + 1)]):
            if(digit == (len(x) - 1)):
                return True
            else:
                continue
        else:
            return False

for i in range(100,999):
    for j in range(100,999):
        possibility = i*j
        if possibility > largest:
            string = str(possibility)
            if (checkPalindrome(string)):
                largest = possibility
print(largest)
# Solved Correctly