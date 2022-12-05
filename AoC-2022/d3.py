def part1():
    file = open('d3.dat', 'r')
    lines = file.readlines()
    compartmentSimilarities = []
    for line in lines:

        for j in range(len(line)/2):
            
            for k in range(len(line)/2,len(line)/2):

                if(line[j] == line[k]):
                    
                    compartmentSimilarities.push(line[j])

    print(compartmentSimilarities)
#cd .\AoC-2022\   
#python3 d3.py
part1()