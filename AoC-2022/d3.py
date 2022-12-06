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
part1()

def part2():
    file = open('d3.dat', 'r')
    lines = file.readlines()
    compartmentSimilarities = 0
