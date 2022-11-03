var deck = ["1D","2D","3D","4D","5D","6D","7D","8D","9D","0D","jD","qD","kD",
            "1H","2H","3H","4H","5H","6H","7H","8H","9H","0H","jH","qH","kH",
            "1S","2S","3S","4S","5S","6S","7S","8S","9S","0S","jS","qS","kS",
            "1C","2C","3C","4C","5C","6C","7C","8C","9C","0C","jC","qC","kC"];
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
    
    $(".dot").css("visibility", "hidden");
    $("#gamestatus").html("");
    
    for(var i = 0; i < 2; i++){
        var index = Math.floor(Math.random() * deck.length);
        var selectcard = deck[index];
        //console.log(selectcard);
        var suit = selectcard.substr(1,1);
        var rank = parseInt(selectcard.substr(0,1))
        console.log(selectcard + " parses to " + rank + " of " + suit + " " + deck.length );
        //console.log(deck);
        deck.splice(index,1);
        //console.log(deck);
        
        if(i == 1){
            ident = "b"
            cardDos = selectcard;
        }else{
            cardUno = selectcard;
        }
        
        
        if (rank == 1){
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 2){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 3){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 4){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 5){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 6){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
        }else if (rank == 7){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 8){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 9){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 0){
            for(var j = 1; j < 11; j++){
                $("#" + j + ident).css("visibility", "visible");
            }
        }else if (selectcard.substr(0,1) == "j"){
            $("#jack" + ident).css("visibility", "visible");
            $("#card" + ident).html("Jack")
        }else if (selectcard.substr(0,1) == "q"){
            $("#queen" + ident).css("visibility", "visible");
            $("#card" + ident).html("Queen")
        }else if (selectcard.substr(0,1) == "k"){
            $("#king" + ident).css("visibility", "visible");
            $("#card" + ident).html("King")
        }
        if(rank < 11){
            $("#card" + ident).html(rank);
        }
        $("#suit" + ident).html(suit);
    }   
    flipDealerCards();
}

function flipDealerCards(){
    var cardTres;
    var cardCuatro;
    var ident = "c";

    $(".ddot").css("visibility", "hidden");
    $("#gamestatus").html("");

    for(var i = 0; i < 2; i++){
        
        var index = Math.floor(Math.random() * deck.length);
        var selectcard = deck[index];
        var suit = selectcard.substr(1,1);
        var rank = parseInt(selectcard.substr(0,1))
        deck.splice(index,1);
        
        if(i == 1){
            ident = "d"
            cardCuatro = selectcard;
        }else{
            cardTres = selectcard;
        }

        
        if (rank == 1){
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 2){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 3){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 4){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 5){
            $("#" + 1 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 6 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 6){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
        }else if (rank == 7){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 8){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
        }else if (rank == 9){
            $("#" + 2 + ident).css("visibility", "visible");
            $("#" + 3 + ident).css("visibility", "visible");
            $("#" + 4 + ident).css("visibility", "visible");
            $("#" + 5 + ident).css("visibility", "visible");
            $("#" + 7 + ident).css("visibility", "visible");
            $("#" + 8 + ident).css("visibility", "visible");
            $("#" + 9 + ident).css("visibility", "visible");
            $("#" + 10 + ident).css("visibility", "visible");
            $("#" + 11 + ident).css("visibility", "visible");
        }else if (rank == 0){
            for(var j = 1; j < 11; j++){
                $("#" + j + ident).css("visibility", "visible");
            }
        }else if (selectcard.substr(0,1) == "j"){
            $("#jack" + ident).css("visibility", "visible");
            $("#card" + ident).html("Jack")
        }else if (selectcard.substr(0,1) == "q"){
            $("#queen" + ident).css("visibility", "visible");
            $("#card" + ident).html("Queen")
        }else if (selectcard.substr(0,1) == "k"){
            $("#king" + ident).css("visibility", "visible");
            $("#card" + ident).html("King")
        }
        if(rank < 11){
            $("#card" + ident).html(rank);
        }
        $("#suit" + ident).html(suit);
    }   

}