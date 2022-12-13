stacks = [['G', 'D', 'V', 'Z', 'J', 'S', 'B'], #1
          ['Z', 'S', 'M', 'G', 'V', 'P'], #2
          ['C', 'L', 'B', 'S', 'W', 'T', 'Q', 'F'], #3
          ['H', 'J', 'G', 'W', 'M', 'R', 'V', 'Q'], #4
          ['C', 'L', 'S', 'N', 'F', 'M', 'D'], #5
          ['R', 'G', 'C', 'D'], #6
          ['H', 'G', 'T', 'R', 'J', 'D', 'S', 'Q'], #7
          ['P', 'F', 'V'], #8
          ['D', 'R', 'S', 'T', 'J'] #9
         ]

testgrid = [['Z', 'N'],
            ['M', 'C', 'D'],
            ['P'] 
           ]


moves = []

def part1():
    file = open('d5.dat', 'r')
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
            crate = stacks[moveFrom].pop()
            stacks[moveTo].append(crate)

    print(stacks)

part1()