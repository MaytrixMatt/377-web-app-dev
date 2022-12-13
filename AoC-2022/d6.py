def part1():
    file = open('d6.dat', 'r')
    line = file.readline().strip()
    first = ''
    second = ''
    third = ''

    for letter in line:
        if(letter != third and letter != second and letter != first and first != third and second != third and first != second):
            print(letter)
        third = second
        second = first
        first = letter

part1()