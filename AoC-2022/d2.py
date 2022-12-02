def part1():
    file = open('d2.dat', 'r')
    lines = file.readlines()
    totalScore = 0
    for line in lines:
        if(line.strip() == 'A X'):
            totalScore += 4
        elif(line.strip() == 'A Y'):
            totalScore += 8 
        elif(line.strip() == 'A Z'):
            totalScore += 3 
        elif(line.strip() == 'B X'):
            totalScore += 1
        elif(line.strip() == 'B Y'):
            totalScore += 5
        elif(line.strip() == 'B Z'):
            totalScore += 9
        elif(line.strip() == 'C X'):
            totalScore += 7
        elif(line.strip() == 'C Y'):
            totalScore += 2
        elif(line.strip() == 'C Z'):
            totalScore += 6
    print("Part 1: " + str(totalScore))
part1()

