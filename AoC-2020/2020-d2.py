def part1():
    file = open('2020-d2.dat', 'r')
    lines = file.readlines()
    for line in lines:
        line = line.split('-')
        print(line)
part1()