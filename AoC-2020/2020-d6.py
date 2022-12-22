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
    yesCharStr = ''
    currentGroup = []
    for line in lines:
        line = line.strip()
        if line != '':
            currentGroup.append(line)
        else:
            for i in len(currentGroup)
            if (char in currentGroup[1] for char in currentGroup[i]):
                if char not in yesCharStr:
                    yesCharStr += char
            totalCount += len(yesCharStr)
            yesCharStr = ''
            currentGroup = []
    print(totalCount)


part1()
part2()