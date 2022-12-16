def part1():
    file = open('2020-d4.dat', 'r')
    lines = file.readlines()
    reqs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    validPassports = 0
    for line in lines:
        line = line.removesuffix('\n')
    for line in lines:
        if all(char in line for char in reqs):
            validPassports += 1
    print(lines)
    print(validPassports)
part1()