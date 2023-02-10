function addANDsubtractError(e1,e2){
    return Math.sqrt((e1*e1) + (e2*e2));
}
function multiplyANDdivideError(a,b,c,d,o){
    if(o){
        var cons = a/c
    }else{
        var cons = a*c
    }
    return (cons + " ± " + (((Math.sqrt(((b/a*100)*(b/a*100)) + ((d/c*100)*(d/c*100))))/100)*(a/c)));
}
console.log(addANDsubtractError(2.1,.5));
console.log(multiplyANDdivideError(100.2,2.1,.10530,.00035, true));