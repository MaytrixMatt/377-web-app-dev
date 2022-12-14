#def countLetter(line):
    

def part1():
    file = open('2020-d2.dat', 'r')
    lines = file.readlines()
    for line in lines:
        line = line.split('-')
        line = line.split(':')

        print(line)
        #count = countLetter(line)
part1()