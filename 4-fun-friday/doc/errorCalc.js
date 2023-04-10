function whereTheStuffHappens(a,b,c,d,o){
    // var a = parseInt(document.getElementById("a").value);
    // var b = parseInt(document.getElementById("b").value);
    // var c = parseInt(document.getElementById("c").value);
    // var d = parseInt(document.getElementById("d").value);
    // var o = document.getElementById("o");
    
    if(o == 'A'){
        var cons = a + c;
    }else if(o == 'S'){
        var cons = a - c;
    }else if(o == 'M'){
        var cons = a * c;
    }else if(o == 'D'){
        var cons = a / c;
    }else{
        //document.getElementById("result").innerHTML = ("Your operation was incorrectly formated");
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


//The following command will run as expected, the problem lies within the html intergration
//console.log(whereTheStuffHappens(207.9,2.1,107.7,.5,'S'));