import re
def part1():
    file = open('2020-d6.dat', 'r')
    lines = file.readlines()
    totalCount = 0
    yesCharStr = ''
    currentGroup = ''
    for line in lines:
        line = line.strip()
        if line != '':
            currentGroup += line
        else:
            for char in currentGroup:
                if char not in yesCharStr:
                    yesCharStr += char
            totalCount += len(yesCharStr)
            yesCharStr = ''
            currentGroup = ''
    print(totalCount)


def part2():
    file = open('2020-d6.dat', 'r')
    lines = file.readlines()
    totalCount = 0
    dictionary = {}
    currentGroup = ''
    for line in lines:
        line = line.strip()
        if line != '':
            currentGroup = currentGroup + line
            for char in line:
                dictionary[char] = 0
        else:
            for i in currentGroup:
                for j in currentGroup:
                    if (currentGroup[i] == currentGroup[j]):
                        dictionary[char] += 1
            for key in dictionary:
                if (dictionary[key] == len(currentGroup)):
                    totalCount += 1
            currentGroup = []
            dictionary = {}
    print(totalCount)


part1()
part2()