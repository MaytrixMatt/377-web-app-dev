stacks = [['B', 'S', 'J', 'Z', 'V', 'D', 'G'], #1
          ['P', 'V', 'G', 'M', 'S', 'Z'], #2
          ['F', 'Q', 'T', 'W', 'S', 'B', 'L', 'C'], #3
          ['Q', 'V', 'R', 'M', 'W', 'G', 'J', 'H'], #4
          ['D', 'M', 'F', 'N', 'S', 'L', 'C'], #5
          ['D', 'C', 'G', 'R'], #6
          ['Q', 'S', 'D', 'J', 'R', 'T', 'G', 'H'], #7
          ['V', 'F', 'P'], #8
          ['J', 'T', 'S', 'R', 'D'] #9
         ]

testgrid = [['Z', 'N'],
            ['M', 'C', 'D'],
            ['P'] 
           ]


moves = []

def part1():
    file = open('d5.snippet.dat', 'r')
    lines = file.readlines()

    for line in lines:
        line = line.strip()
        pieces = line.split()
        moveCount = int(pieces[1])
        moveFrom = int(pieces[3]) - 1
        moveTo = int(pieces[5]) - 1
        moves.append([moveCount, moveFrom, moveTo])

    for move in moves:
        moveCount = move[0]
        moveFrom = move[1]
        moveTo = move[2]

        for i in range(moveCount):
            crate = testgrid[moveFrom].pop()
            testgrid[moveTo].append(crate)

    print(testgrid)

part1()