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
    
                        if(i == 1){
                            ident = "b"
                            cardDos = selectcard;
                        }else{
                            cardUno = selectcard;
                        }
    
                        
                        if (selectcard == 1){
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 2){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                        }else if (selectcard == 3){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 4){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                        }else if (selectcard == 5){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 6){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 7){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 8){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 9){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 10){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 11){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 12){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }else if (selectcard == 13){
                            $("#" + 1 + ident).css("visibility", "visible");
                            $("#" + 3 + ident).css("visibility", "visible");
                            $("#" + 4 + ident).css("visibility", "visible");
                            $("#" + 6 + ident).css("visibility", "visible");
                            $("#" + 7 + ident).css("visibility", "visible");
                        }
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