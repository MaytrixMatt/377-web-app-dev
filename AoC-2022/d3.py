def part1():
    file = open('d3.dat', 'r')
    lines = file.readlines()
    compartmentSimilarities = []
    for line in lines:
        mid = int(len(line)/2)
        string1 = line[0:(mid-1)]
        string2 = line[mid:(mid*2-1)]
        for j in range(mid):

                if(string1[j-1] in string2):

                    compartmentSimilarities.append(string1[j])
                    break

    
    print(compartmentSimilarities)
#cd .\AoC-2022\   
#python3 d3.py
part1()