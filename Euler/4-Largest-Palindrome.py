largest = 1001

def checkPalindrome(x):
    for i in range(len(x)):
        if(x[i] == x[len(x) - i]):
            if(i == len(x)):
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