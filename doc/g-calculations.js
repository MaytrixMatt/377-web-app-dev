function addANDsubtractError(e1,e2){
    return Math.sqrt((e1*e1) + (e2*e2));
}
function multiplyANDdivideError(a,b,c,d){
    return (Math.sqrt(((b/a*100)*(b/a*100)) + ((d/c*100)*(d/c*100)))/100)*(a/c);
}
console.log(addANDsubtractError(1,.2));
console.log(multiplyANDdivideError(133,1,.14703,.00050));