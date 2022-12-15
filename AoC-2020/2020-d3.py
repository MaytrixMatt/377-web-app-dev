def calcNumTrees(x,y):
    file = open('2020-d3.dat', 'r')
    lines = file.readlines()
    xLocation = 0
    numTrees = 0
    counter = 0
    for line in lines:
        line=line.strip()
        if(counter % y == 0):
            if(line[xLocation % len(line)] == '#'):
                numTrees += 1
            xLocation += x
        counter += 1
    return(numTrees)


def part1():
    print(calcNumTrees(3,1))
part1()


def part2():
    print(calcNumTrees(1,1)*calcNumTrees(1,3)*calcNumTrees(1,5)*calcNumTrees(1,7)*calcNumTrees(2,1))
part2()