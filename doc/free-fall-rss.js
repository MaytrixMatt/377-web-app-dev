var bdiac = 1.9060
var bdiae = 0.0005
var bcalc = (bdiae/bdiac*100)*(bdiae/bdiac*100)
var tc = null
var te = null
var tcalc = (te/tc*100)*(te/tc*100)
var c = bdiac/tc
var pe = Math.sqrt(bcalc + tcalc)
var e = (pe/100)*c
print(c + " ± " + e)