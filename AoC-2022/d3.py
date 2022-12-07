# The following helper function was 'borrowed' from bciccolo (https://github.com/bciccolo).

def getPriority(letter):
    priority = ord(letter)

    if (priority > 96): # lowercase
        priority -= 96
    else:               # uppercase
        priority -= 38

    return priority


def part1():
    file = open('d3.dat', 'r')
    lines = file.readlines()
    compartmentSimilarities = 0
    for line in lines:
        mid = int(len(line)/2)
        string1 = line[0:(mid)]
        string2 = line[mid:(mid*2)]
        for letter in string1:

                if(letter in string2):

                    compartmentSimilarities += getPriority(letter)
                    break

    print(compartmentSimilarities)
#cd .\AoC-2022\   
#python3 d3.py

def findSimilarites(array):
    for letter in array[0]:
        if letter in array[1] and letter in array[2]:
            return letter

def part2():
    file = open('d3.dat', 'r')
    lines = file.readlines()
    compartmentSimilarities = []
    sum = 0

    for line in lines:

        line = line.strip()
        compartmentSimilarities.append(line)

        if(len(compartmentSimilarities) == 3):
                    letter = findSimilarites(compartmentSimilarities)
                    sum += getPriority(letter)
                    compartmentSimilarities = []

    print(sum)

part1()
part2()
