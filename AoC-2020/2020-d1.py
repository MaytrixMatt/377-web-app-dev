def part1():
    file = open('2020-d1.dat', 'r')
    lines = file.readlines()
    for line1 in lines:
        line1 = int(line1)
        for line2 in lines:
            line2 = int(line2)
            if(line1 + line2 == 2020):
                print(line1 * line2)
def part2():
    file = open('2020-d1.dat', 'r')
    lines = file.readlines()
    for line1 in lines:
        line1 = int(line1)
        for line2 in lines:
            line2 = int(line2)
            for line3 in lines:
                line3 = int(line3)
                if(line1 + line2 + line3 == 2020):
                    print(line1 * line2 * line3)
part1()
part2()