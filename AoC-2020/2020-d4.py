def part1():
    file = open('2020-d4.dat', 'r')
    lines = file.readlines()
    reqs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    validPassports = 0
    passport = ''
    for line in lines:
        line = line.strip()
        if line != '':
            passport += line
        else:
            if all(char in passport for char in reqs):
                validPassports += 1
            passport = ''
    print(validPassports)
part1()


def part2():
    file = open('2020-d4.dat', 'r')
    lines = file.readlines()
    realLines = []
    reqs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    validPassports = 0
    passport = ''
    for line in lines:
        line = line.strip()
        if line != '':
            passport += line
        else:
            if all(char in passport for char in reqs):
                realLines.append(passport)
            passport = ''
    for passport in realLines:
        count = 0

        byrStr = passport.split('byr:')
        iyrStr = passport.split('iyr:')
        eyrStr = passport.split('eyr:')
        hgtStr = passport.split('hgt:')
        hclStr = passport.split('hcl:')
        eclStr = passport.split('ecl:')
        pidStr = passport.split('pid:')

        if (int(byrStr) > 1919 and int(byrStr) < 2003):
            count += 1
        



    print()
part2()
