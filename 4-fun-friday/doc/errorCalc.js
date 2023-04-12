function whereTheStuffHappens(a,b,c,d,o){
    if(o == 'A'){
        var cons = a + c;
    }else if(o == 'S'){
        var cons = a - c;
    }else if(o == 'M'){
        var cons = a * c;
    }else if(o == 'D'){
        var cons = a / c;
    }else{
        return("Incorrect Format - Operation should be 'A', 'S', 'M', or 'D'");
    }

    if(o == 'A' || o == 'S'){
        var error = Math.sqrt((b*b) + (d*d));
        var p = '';
    }else{
        var error = ((Math.sqrt(((b/a*100)*(b/a*100)) + ((d/c*100)*(d/c*100))))/100);
        var p = '%';
    }
    //document.getElementById("result").innerHTML = (cons + ' ± ' + error);
    return(cons + ' ± ' + error + p);
}
//         var p = ''
        
//     }else{
//         var error = ((Math.sqrt(((b/a*100)*(b/a*100)) + ((d/c*100)*(d/c*100))))/100);
//         var p = ' %'
//     }

//     return(cons + ' ± ' + error + p);
// }