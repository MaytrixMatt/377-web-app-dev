import re
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
    currentPassport = ''
    for line in lines:
        line = line.strip()
        if line != '':
            currentPassport += line
        else:
            if all(char in currentPassport for char in reqs):
                realLines.append(currentPassport)
            currentPassport = ''
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
        if (int(iyrStr) > 2009 and int(iyrStr) < 2021):
            count += 1
        if (int(eyrStr) > 2019 and int(eyrStr) < 2031):
            count += 1
        value = hgtStr[:-2]
        units = hgtStr[-2:]
        if (units == 'in'):
            if (int(value) > 58 and int(value) < 77):
                count += 1
        if (units == 'cm'):
            if (int(value) > 149 and int(value) < 194):
                count += 1
        if (re.search(r'^#[0-9a-f]{6}', hclStr)):
            count += 1
        if (eclStr in ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']):
            count += 1
        if (re.search(r'^[0-9]{9}', pidStr)):
            count += 1

        if (count == 7):
            validPassports += 1
        
    print(validPassports)
part2()
