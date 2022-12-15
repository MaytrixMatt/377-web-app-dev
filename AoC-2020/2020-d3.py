def part1():
    file = open('2020-d3.dat', 'r')
    lines = file.readlines()
    yLocation = 0
    numTrees = 0
    for line in lines:
        if(line[yLocation%31] == '#'):
            numTrees += 1
        yLocation += 3
    print(numTrees)
part1()

def calcNumTrees(y,x,lines):
    yLocation = 0
    numTrees = 0
    counter = 0
    
    for line in lines:
        if(counter % 2 == 0):
            if(line[yLocation % 31] == '#'):
                numTrees += 1
            yLocation += y

        if(x == 2):
            counter += 1
    return(numTrees)


def part2():
    file = open('2020-d3.dat', 'r')
    lines = file.readlines()
    totalTrees = calcNumTrees(1,1,lines)*calcNumTrees(3,1,lines)*calcNumTrees(5,1,lines)*calcNumTrees(7,1,lines)*calcNumTrees(1,2,lines)
    print(totalTrees)
part2()


