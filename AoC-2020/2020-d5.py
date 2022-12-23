import re
for line in (open('2020-d5.dat', 'r').readlines()): 
    if (re.search(r'^[B]{4}FB', line.strip()[:7]) and re.search(r'^L[R]{1}', line.strip()[7:])): print(line)