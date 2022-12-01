def part1():
    file = open('dayone.dat', 'r')
    lines = file.readlines()
    runningTotal = 0
    max = 0
    for line in lines:
        if(line.strip() == ''):
            if(runningTotal > max):
                max = runningTotal
            runningTotal = 0
        else:
            number = int(line.strip())
            runningTotal += number
    print("Part 1: " + str(max))
part1()

def part2():
    file = open('dayone.dat', 'r')
    lines = file.readlines()
    runningTotal = 0
    max1 = 0
    max2 = 0
    max3 = 0
    for line in lines:
        if(line.strip() == ''):
            if(runningTotal > max1):
                max3 = max2
                max2 = max1
                max1 = runningTotal
            
            elif(runningTotal > max2):
                max3 = max2
                max2 = runningTotal
            
            elif(runningTotal > max3):
                max3 = runningTotal
            runningTotal = 0
           
        else:
            number = int(line.strip())
            runningTotal += number
    total = max1 + max2 + max3
    print("Part 2: " + str(total))
part2()
#PS C:\Users\mcollins24\Desktop\377-web-app-dev> cd .\AoC-2022\   
#PS C:\Users\mcollins24\Desktop\377-web-app-dev\AoC-2022> python3 dayone.py