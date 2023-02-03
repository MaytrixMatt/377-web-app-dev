function calculateBallVelos(timeConstant,timeError){    
    var ballDiameterConstant = 1.9060;
    var ballDiameterError = 0.0005;
    var ballRSS = (ballDiameterError/ballDiameterConstant*100)*(ballDiameterError/ballDiameterConstant*100);
    var timeRSS = (timeError/timeConstant*100)*(timeError/timeConstant*100);
    var constant = ballDiameterConstant/timeConstant;
    var percentError = Math.sqrt(ballRSS + timeRSS);
    var error = (percentError/100)*constant;
    console.log(constant + " ± " + error);
}

calculateBallVelos(0.00563,0.00009);







// A replica of my original version - very hard to understand so I made the one above
function uncomprehendable(tc,te){
    console.log((1.9060/tc) + " ± " + (((Math.sqrt(((0.0005/1.9060*100)*(0.0005/1.9060*100)) + ((te/tc*100)*(te/tc*100))))/100)*(1.9060/tc)));
}