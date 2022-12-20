import re
def part1(i):
    file = open('2020-d4.dat', 'r')
    lines = file.readlines()
    reqs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    validPassportArray = []
    validPassports = 0
    passport = ''
    for line in lines:
        line = line.strip()
        if line != '':
            passport += line
        else:
            if all(char in passport for char in reqs):
                validPassports += 1
                validPassportArray.append(passport)
            passport = ''
    if (i == 0):
        return(validPassports)
    else: 
        return(validPassportArray)

print(part1(0))


def part2():
    validPassports = 0
    realLines = part1(1)
    for passport in realLines:
        valid = True

        byrStr = passport[(passport.index('byr:')) + 4 : (passport.index(' ', (passport.index('byr:'))))]
        iyrStr = passport[(passport.index('iyr:')) + 4 : (passport.index(' ', (passport.index('iyr:'))))]
        eyrStr = passport[(passport.index('eyr:')) + 4 : (passport.index(' ', (passport.index('eyr:'))))]
        hgtStr = passport[(passport.index('hgt:')) + 4 : (passport.index(' ', (passport.index('hgt:'))))]
        hclStr = passport[(passport.index('hcl:')) + 4 : (passport.index(' ', (passport.index('hcl:'))))]
        eclStr = passport[(passport.index('ecl:')) + 4 : (passport.index(' ', (passport.index('ecl:'))))]
        pidStr = passport[(passport.index('pid:')) + 4 : (passport.index(' ', (passport.index('pid:'))))]

        valid = valid + (int(byrStr) > 1919 and int(byrStr) < 2003)
        valid = valid + (int(iyrStr) > 2009 and int(iyrStr) < 2021)
        valid = valid + (int(eyrStr) > 2019 and int(eyrStr) < 2031)
        value = hgtStr[:-2]
        units = hgtStr[-2:]
        if (units == 'in'):
            valid = valid + (int(value) > 58 and int(value) < 77)
        if (units == 'cm'):
            valid = valid + (int(value) > 149 and int(value) < 194)
        valid = valid + (re.search(r'^#[0-9a-f]{6}', hclStr))
        valid = valid + (eclStr in ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])
        valid = valid + (re.search(r'^[0-9]{9}', pidStr))

        if (valid):
            validPassports += 1
        
    print(validPassports)
part2()