def part1():
    file = open('d6.dat', 'r')
    line = file.readline().strip()
    first = ''
    second = ''
    third = ''
    index = 0
    for letter in line:
        print(third + second + first + letter)
        if(letter != third and letter != second and letter != first and first != third and second != third and first != second and index > 3):
            print(index)
            break
        third = second
        second = first
        first = letter
        index += 1


part1()
def part1():
    file = open('d6.dat', 'r')
    line = file.readline().strip()
    first = ''
    second = ''
    third = ''
    fourth = ''
    fifth = ''
    sixth = ''
    seventh = ''
    eighth = ''
    ninth = ''
    tenth = ''
    eleventh = ''
    twelth = ''
    thirteenth = ''
    index = 0
    for letter in line:
        if(letter != third and letter != second and letter != first and first != third and second != third and first != second and index > 13):
            print(index)
            break
        thirteenth = twelth
        twelth = eleventh
        eleventh = tenth
        tenth = ninth
        ninth = eighth
        eighth = seventh
        seventh = sixth
        sixth = fifth
        fifth = fourth
        fourth = third
        third = second
        second = first
        first = letter
        index += 1


part1()