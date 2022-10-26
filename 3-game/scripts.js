var lifeSavings = 100;
var point = 0;
var bet = 0;
function calcuclateDeviationOfLifeSavings(bet,win){
    if(win){
        lifeSavings += bet;
    }else{
        lifeSavings -= bet;
    }
    console.log(bet);
    $("#LifeSavings").html(lifeSavings);
}

function flipCards(){
    var cardUno;
    var cardDos;
    var ident = "a";

    while (point == 0 && (bet > lifeSavings || bet <= 4.9)){
        bet = 0
        bet = parseInt(prompt("Place your bets"));
    }


    $(".dot").css("visibility", "hidden");
    $("#gamestatus").html("");

    for(var i = 0; i < 2; i++){
        
        var selectcard = Math.floor(Math.random() * 13 + 1);
        var suit = Math.floor(Math.random() * 4 + 1);

        if(suit == 1){
            suit = "D"
        }else if(suit == 2){
            suit = "H"
        }else if(suit == 3){
            suit = "S"
        }else{
            suit = "C"
        }

        if(i == 1){
            ident = "b"
            cardDos = selectcard;
        }else{
            cardUno = selectcard;
        }

        
        if (selectcard == 1){
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (selectcard == 2){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (selectcard == 3){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (selectcard == 4){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (selectcard == 5){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (selectcard == 6){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
        }else if (selectcard == 7){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (selectcard == 8){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (selectcard == 9){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (selectcard == 10){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (selectcard == 11){
            $("#jack" + ident).css("visibility", "visible");
            $("#card" + ident).html("Jack")
        }else if (selectcard == 12){
            $("#queen" + ident).css("visibility", "visible");
            $("#card" + ident).html("Queen")
        }else if (selectcard == 13){
            $("#king" + ident).css("visibility", "visible");
            $("#card" + ident).html("King")
        }
        if(0 < selectcard < 11){
            $("#card" + ident).html(selectcard);
        }
        $("#suit" + ident).html(suit);
    }   

    var elSum = cardUno + cardDos;


    if(point == 0){
        if(elSum == 7 || elSum == 11){
            $("#gamestatus").html("Win");
            calcuclateDeviationOfLifeSavings(bet,true);
        }else if(elSum == 2 || elSum == 3 || elSum == 12){
            $("#gamestatus").html("Lose");
            calcuclateDeviationOfLifeSavings(bet,false);
        }else{
            point = elSum;
            $("#savedroll").html(point);
        }
    }else{
        if(point == elSum){
            $("#gamestatus").html("Win");
            calcuclateDeviationOfLifeSavings(bet,true);
            point = 0;
        }else if(elSum == 7){
            $("#gamestatus").html("Lose");
            calcuclateDeviationOfLifeSavings(bet,false);
            point = 0;
        }
    }

}