var nowEvalx = 0;
var nowEvaly = 0;
var mode = 0;
var shape = 0;
var shapeis = 0;
var del = 0;
var calor = 0;
var rotat = 0;
var rot = 0;
var siz = 0;
var ov = 0;
var textsiz = 15;
var str = 0;
var arr = [];

// controls

// clicking and holding on the drawing pad will move an object

// click an object and then press the left key will delete it

// press d to duplicate

// white square brings you to different shapes (on the right) , click on a shape
// then click where you want it to go above (on the drawing pad)

// click the red square to bring you to the colors menu
// click a color, and then click and object to be that color

// green makes it bigger while red makes it smaller

// click the diangonal square, click on the white right or left
// square and then on the object you want to rotate

// click text, then type in the text, if you want to move it, click off of it
// first, then move

// click the helcopter then paste your image url to put an image in click off of it
// first, then move
function start(){
	makeStart();
	setTimer(findmo, 20); 
	mouseDownMethod(doStuff);
	mouseClickMethod(deleteMab);
}
function deleteMab(){
    keyDownMethod(deleteorRotorDup);    
}    
function deleteorRotorDup(e){
    if (e.keyCode == Keyboard.LEFT && mode == 0) {
		var elem = getElementAt(nowEvalx, nowEvaly);
        if (nowEvaly < 345 && elem != null){
            remove(elem);
        }
	}
	if (e.keyCode == Keyboard.letter('D') && mode == 0) {
		var elem = getElementAt(nowEvalx, nowEvaly);
		var typeis = 0;
		if(nowEvaly < 345 && elem != null){
		    typeis = elem.getType();
		}
		if(nowEvaly < 345 && elem != null && typeis == "Circle"){
		    var elemrad = elem.getRadius();	
		    var elemcol = elem.getColor();
		    var circle = new Circle(elemrad);
            circle.setPosition(nowEvalx + 10, nowEvaly + 10);
            circle.setColor(elemcol);
            add(circle);
		}
		if(nowEvaly < 345 && elem != null && typeis == "Oval"){
		    var elemhe = elem.getHeight();	
		    var elemwid = elem.getWidth();
		    var elemcol = elem.getColor();
		    var oval = new Oval(elemwid, elemhe);
            oval.setPosition(nowEvalx + 10, nowEvaly + 10);
            oval.setColor(elemcol);
            add(oval);
            oval.setRotation(rot); 
		}
		if(nowEvaly < 345 && elem != null && typeis == "Rectangle"){
		    var elemhe = elem.getHeight();	
		    var elemwid = elem.getWidth();
		    var elemcol = elem.getColor();
		    var oval = new Rectangle(elemwid, elemhe);
            oval.setPosition(nowEvalx + 10, nowEvaly + 10);
            oval.setColor(elemcol);
            add(oval);
            oval.setRotation(rot); 
		}
		if(nowEvaly < 345 && elem != null && typeis == "Text"){
		    var elemtex = elem.getText();	
		    var elemcol = elem.getColor();
		    var oval = new Text(elemtex, textsiz + "pt Arial");
            oval.setPosition(nowEvalx + 10, nowEvaly + 10);
            oval.setColor(elemcol);
            add(oval);
            oval.setRotation(rot); 
		}
		if(nowEvaly < 345 && elem != null && typeis == "WebImage"){
		    str = arr[1];
		    var elemhe = elem.getHeight();	
		    var elemwid = elem.getWidth();
		    var copter = new WebImage(str);
            copter.setSize(elemwid, elemhe);
            copter.setPosition(nowEvalx + 10, nowEvaly + 10);
            add(copter);
		}
	}
}
// for a, |0 = circle or oval| |1 = square, rectangle, image| |2 = text|
function stopStuff(){
    stopTimer(moveThing);
    var elem = getElementAt(nowEvalx, nowEvaly);
    if (elem != null){
        var whattype = elem.getType();
        if(whattype == "Circle"){
            println(" ");
            println("radius = " + elem.getRadius());
            println("color = " + elem.getColor());
            println("x position = " + elem.getX());
            println("y position = " + elem.getY());
        }
        if(whattype == "WebImage"){
            println(" ");
            println("Width = " + elem.getWidth());
            println("Height = " + elem.getHeight());
            println("x position = " + elem.getX());
            println("y position = " + elem.getY());
        }
        if(whattype == "Text"){
            println(" ");
            println("text size = " + textsiz);
            println("color = " + elem.getColor());
            println("x position = " + elem.getX());
            println("y position = " + elem.getY());
        }
        if(whattype == "Oval" || whattype == "Rectangle"){
            println(" ");
            println("Width = " + elem.getWidth());
            println("Height = " + elem.getHeight());
            println("color = " + elem.getColor());
            println("x position = " + elem.getX());
            println("y position = " + elem.getY());
        }
    }
}
function moveThing(){
    var a = 0;
    var h = 0;
    var elem = getElementAt(nowEvalx, nowEvaly);
    if (a == 0 && elem != null){
        elem.setPosition(nowEvalx, nowEvaly);
        elem.setRotation(rot); 
    } 
    var elemen = getElementAt(nowEvalx + 2, nowEvaly + 2);
    if (elemen == null){
        a = 1;
    }
    elemen = getElementAt(nowEvalx + 2, nowEvaly - 2);
    if (elemen == null){
        a = 2;
    }
    if (a == 1 && elem != null){
        elem.setRotation(0); 
        elem.setPosition(nowEvalx - 12, nowEvaly + 12);
        elem.setRotation(rot); 
    } 
    if (a == 2 && elem != null){
        elem.setRotation(0); 
        elem.setPosition(nowEvalx - 12, nowEvaly - 12);
        elem.setRotation(rot); 
    }
    if (elem != null){
        h = elem.getType();
    }
    if (elem != null && h == "WebImage"){
        elem.setRotation(0); 
        elem.setPosition(nowEvalx - 12, nowEvaly - 12);
        elem.setRotation(rot); 
    }
	mouseUpMethod(stopStuff);
}
// for a, |0 = circle| |1 = square, rectangle, image, oval| |2 = text|
// make it so the oval can be longer on the x side
function doStuff(){
	var elem = getElementAt(nowEvalx, nowEvaly);
	if (elem != null && nowEvaly < 345) {
		if (mode == 0){
		    setTimer(moveThing, 20);
		}
		if (mode == 2){
		    var elem = getElementAt(nowEvalx, nowEvaly);
	        if (elem != null) {
	            if(calor == 1){
		            elem.setColor(Color.red);
	            }     
	            if(calor == 2){
		            elem.setColor(Color.green);
	            }
	            if(calor == 3){
		            elem.setColor(Color.blue);
	            }
	            if(calor == 4){
		            elem.setColor(Color.yellow);
	            }
	            if(calor == 5){
		            elem.setColor(Color.orange);
	            }
	            if(calor == 6){
		            elem.setColor(Color.white);
	            }
	            if(calor == 7){
		            elem.setColor(Color.black);
	            }
	            if(calor == 8){
		            elem.setColor(Color.gray);
	            }
	            if(calor == 9){
		            elem.setColor(Color.purple);
	            }
	        }
		}
		if(mode == 3){
		    var elem = getElementAt(nowEvalx, nowEvaly);
		    var shapeis = elem.getType();
		    if(siz == 1){
		        if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad + 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid, he + 4);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid, he + 4);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
	                    var col = elem.getColor();
	                    var c = elem.getText();
	                    textsiz = textsiz + 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid, elemhe + 4);
                    }    
                }    
		    }
	        if(siz == 2){
		        if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad + 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid + 4, he + 4);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid + 4, he + 4);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                var col = elem.getColor();
	                if (elem != null) {
	                    var c = elem.getText();
	                    textsiz = textsiz + 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid + 4, elemhe + 4);
                    }    
                } 
	        }
            if(siz == 3){
                if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad - 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid - 4, he);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid - 4, he);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                var col = elem.getColor();
	                if (elem != null) {
	                    var c = elem.getText();
	                    textsiz = textsiz - 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid - 4, elemhe);
                    }    
                } 
            }
            if(siz == 4){
                if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad + 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid + 4, he);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid + 4, he);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                var col = elem.getColor();
	                if (elem != null) {
	                    var c = elem.getText();
	                    textsiz = textsiz + 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid + 4, elemhe);
                    }    
                } 
            }
            if(siz == 5){
		        if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad - 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid - 4, he - 4);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid - 4, he - 4);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                var col = elem.getColor();
	                if (elem != null) {
	                    var c = elem.getText();
	                    textsiz = textsiz - 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid - 4, elemhe - 4);
                    }    
                } 
	        }
	        if(siz == 6){
		        if(shapeis == "Circle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var rad = elem.getRadius();
		                elem.setRadius(rad - 4);
	                }
                }
                if(shapeis == "Rectangle"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var rect = new Rectangle(wid, he - 4);
                        rect.setPosition(nowEvalx - 12, nowEvaly - 12);
                        rect.setColor(col);
                        add(rect);
                        rect.setRotation(rot); 
	                }
                }
                if(shapeis == "Oval"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                if (elem != null) {
		                var wid = elem.getWidth();
		                var he = elem.getHeight();
		                col = elem.getColor();
		                remove(elem);
		                var oval = new Oval(wid, he - 4);
                        oval.setPosition(nowEvalx, nowEvaly);
                        oval.setColor(col);
                        add(oval);
                        oval.setRotation(rot); 
	                }
                }
                if(shapeis == "Text"){
	                var elem = getElementAt(nowEvalx, nowEvaly);
	                var col = elem.getColor();
	                if (elem != null) {
	                    var c = elem.getText();
	                    textsiz = textsiz - 4;
	                    remove(elem);
	                    var txt = new Text(c, textsiz + "pt Arial");
                        txt.setPosition(nowEvalx - 12, nowEvaly + 12);
                        txt.setColor(col);
                        add(txt);
                        txt.setRotation(rot); 
	                }
                }
                if(shapeis == "WebImage"){
                    var elem = getElementAt(nowEvalx, nowEvaly);
                    if (elem != null) {
		                var elemhe = elem.getHeight();	
		                var elemwid = elem.getWidth();
		                var elemcol = elem.getColor();
		                elem.setPosition(nowEvalx - 12, nowEvaly - 12);
                        elem.setSize(elemwid, elemhe - 4);
                    }    
                } 
	        }
		}
		if(mode == 4){
		    var elem = getElementAt(nowEvalx, nowEvaly);
	        if (elem != null) {
	            if(rotat == 1){
		            rot = rot - 4;
		            elem.setRotation(rot);
	            }     
	            if(rotat == 2){
		            rot = rot + 4;
		            elem.setRotation(rot);
	            }
	        }
		}
	}else if(nowEvaly < 345 && mode == 1 && shape > 0){
	    if(shape == 1){
	        var circle = new Circle(18);
            circle.setPosition(nowEvalx, nowEvaly);
            circle.setColor(Color.black);
            add(circle);
	    }
	    if(shape == 2){
	        var rect = new Rectangle(25, 25);
            rect.setPosition(nowEvalx, nowEvaly);
            rect.setColor(Color.black);
            add(rect);
            //192.168.1.203
	    }
	    if(shape == 3){
	        var oval = new Oval(20, 40);
            oval.setPosition(nowEvalx, nowEvaly);
            oval.setColor(Color.black);
            add(oval);
	    }
	}else if(nowEvaly < 345){    
	    var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
	    mode = 0;
	}else{   
	}
    if (Math.abs(nowEvalx - 37.5)  <= 17.5 && Math.abs(nowEvaly - 397.5) <= 17.5){
        mode = 1;
    }
    if (Math.abs(nowEvalx - 37.5)  <= 17.5 && Math.abs(nowEvaly - 444.5) <= 17.5){
        mode = 2;
    }
    if (Math.abs(nowEvalx - 110)  <= 10 && Math.abs(nowEvaly - 390) <= 10){
        mode = 3;
    }
    if (Math.abs(nowEvalx - 118)  <= 15 && Math.abs(nowEvaly - 450) <= 15){
        mode = 4;
    }
    if (Math.abs(nowEvalx - 185)  <= 22 && Math.abs(nowEvaly - 400) <= 10){
        mode = 5;
    }
    if (Math.abs(nowEvalx - 205)  <= 40 && Math.abs(nowEvaly - 450) <= 18){
        mode = 6;
    }
    if (mode == 1){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        var circle = new Circle(20);
        circle.setPosition(300, 385);
        circle.setColor(Color.white);
        add(circle);
        var rect = new Rectangle(50, 30);
        rect.setPosition(340, 370);
        rect.setColor(Color.white);
        add(rect);
        var oval = new Oval(30, 50);
        oval.setPosition(333, 440);
        oval.setColor(Color.white);
        add(oval);
    }
    if (Math.abs(nowEvalx - 300)  <= 17 && Math.abs(nowEvaly - 385) <= 17 && mode == 1){
        shape = 1;
    }
    if (Math.abs(nowEvalx - 365)  <= 25 && Math.abs(nowEvaly - 385) <= 15 && mode == 1){
        shape = 2;
    }
    if (Math.abs(nowEvalx - 333)  <= 26 && Math.abs(nowEvaly - 440) <= 46 && mode == 1){
        shape = 3;
    }
    if (mode == 2){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(280, 370);
        rect.setColor(Color.red);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(320, 370);
        rect.setColor(Color.green);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(360, 370);
        rect.setColor(Color.blue);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(280, 410);
        rect.setColor(Color.yellow);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(320, 410);
        rect.setColor(Color.orange);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(360, 410);
        rect.setColor(Color.white);
        add(rect);
        var rect = new Rectangle(30, 30);
        rect.setPosition(277.5, 447.5);
        rect.setColor(Color.white);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(280, 450);
        rect.setColor(Color.black);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(320, 450);
        rect.setColor(Color.gray);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(360, 450);
        rect.setColor(Color.purple);
        add(rect);
    }
    if (Math.abs(nowEvalx - 292.5)  <= 12.5 && Math.abs(nowEvaly - 382.5) <= 12.5 && mode == 2){
        calor = 1;
    }
    if (Math.abs(nowEvalx - 332.5)  <= 12.5 && Math.abs(nowEvaly - 382.5) <= 12.5 && mode == 2){
        calor = 2;
    }
    if (Math.abs(nowEvalx - 372.5)  <= 12.5 && Math.abs(nowEvaly - 382.5) <= 12.5 && mode == 2){
        calor = 3;
    }
    if (Math.abs(nowEvalx - 292.5)  <= 12.5 && Math.abs(nowEvaly - 422.5) <= 12.5 && mode == 2){
        calor = 4;
    }
    if (Math.abs(nowEvalx - 332.5)  <= 12.5 && Math.abs(nowEvaly - 422.5) <= 12.5 && mode == 2){
        calor = 5;
    }
    if (Math.abs(nowEvalx - 372.5)  <= 12.5 && Math.abs(nowEvaly - 422.5) <= 12.5 && mode == 2){
        calor = 6;
    }
    if (Math.abs(nowEvalx - 292.5)  <= 12.5 && Math.abs(nowEvaly - 462.5) <= 12.5 && mode == 2){
        calor = 7;
    }
    if (Math.abs(nowEvalx - 332.5)  <= 12.5 && Math.abs(nowEvaly - 462.5) <= 12.5 && mode == 2){
        calor = 8;
    }
    if (Math.abs(nowEvalx - 372.5)  <= 12.5 && Math.abs(nowEvaly - 462.5) <= 12.5 && mode == 2){
        calor = 9;
    }
    if (mode == 3){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(320, 370);
        rect.setColor(Color.green);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(360, 370);
        rect.setColor(Color.green);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(280, 410);
        rect.setColor(Color.red);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(360, 410);
        rect.setColor(Color.green);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(280, 450);
        rect.setColor(Color.red);
        add(rect);
        var rect = new Rectangle(25, 25);
        rect.setPosition(320, 450);
        rect.setColor(Color.red);
        add(rect);
    }
    if (Math.abs(nowEvalx - 332.5)  <= 12.5 && Math.abs(nowEvaly - 382.5) <= 12.5 && mode == 3){
        siz = 1;
    }
    if (Math.abs(nowEvalx - 372.5)  <= 12.5 && Math.abs(nowEvaly - 382.5) <= 12.5 && mode == 3){
        siz = 2;
    }
    if (Math.abs(nowEvalx - 292.5)  <= 12.5 && Math.abs(nowEvaly - 422.5) <= 12.5 && mode == 3){
        siz = 3;
    }
    if (Math.abs(nowEvalx - 372.5)  <= 12.5 && Math.abs(nowEvaly - 422.5) <= 12.5 && mode == 3){
        siz = 4;
    }
    if (Math.abs(nowEvalx - 292.5)  <= 12.5 && Math.abs(nowEvaly - 462.5) <= 12.5 && mode == 3){
        siz = 5;
    }
    if (Math.abs(nowEvalx - 332.5)  <= 12.5 && Math.abs(nowEvaly - 462.5) <= 12.5 && mode == 3){
        siz = 6;
    }
    if (mode == 4){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        var rect = new Rectangle(35, 60);
        rect.setPosition(280, 385);
        rect.setColor(Color.white);
        add(rect);
        var rect = new Rectangle(35, 60);
        rect.setPosition(345, 385);
        rect.setColor(Color.white);
        add(rect);
    }
    if (Math.abs(nowEvalx - 297.5)  <= 17.5 && Math.abs(nowEvaly - 415) <= 30 && mode == 4){
        rotat = 1;
    }
    if (Math.abs(nowEvalx - 362.5)  <= 17.5 && Math.abs(nowEvaly - 415) <= 30 && mode == 4){
        rotat = 2;
    }
    if (mode == 5){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        var str = readLine("What do you want your text to say? ");
        var txt = new Text(str, textsiz + "pt Arial");
        txt.setPosition(10, 40);
        txt.setColor(Color.black);
        add(txt);
    }
    if (mode == 6){
        var rect = new Rectangle(200, 150);
        rect.setPosition(255, 350);
        rect.setColor(Color.black);
        add(rect);
        str = readLine("What image do you want? ");
        arr[1] = str; 
        var copter = new WebImage(str);
        copter.setSize(100, 100);
        copter.setPosition(20, 60);
        add(copter);
    }
}
function findmo(){
    mouseMoveMethod(nowMo);
}
function nowMo(e){
    nowEvalx = e.getX();
    nowEvaly = e.getY();
}
function makeStart(){
    var rect = new Rectangle(getWidth(), 150);
    rect.setPosition(0, 350);
    rect.setColor(Color.black);
    add(rect);
    var recta = new Rectangle(5, 150);
    recta.setPosition(250, 350);
    recta.setColor(Color.white);
    add(recta);
    var rec = new Rectangle(35, 35);
    rec.setPosition(20, 380);
    rec.setColor(Color.white);
    add(rec);
    var reca = new Rectangle(35, 35);
    reca.setPosition(20, 430);
    reca.setColor(Color.red);
    add(reca);
    var recb = new Rectangle(20, 20);
    recb.setPosition(100, 380);
    recb.setColor(Color.white);
    add(recb);
    var recc = new Rectangle(35, 35);
    recc.setPosition(100, 430);
    recc.setColor(Color.white);
    recc.setRotation(45);    
    add(recc);
    var txt = new Text("Text", "20pt Arial");
    txt.setPosition(160, 410);
    txt.setColor(Color.white);
    add(txt);
    var copter = new WebImage("https://upload.wikimedia.org/" +
						  "wikipedia/commons/4/41/" +
						  "Bell_206L3_%28D-HASA%29.jpg");
	copter.setSize(80, 40);
    copter.setPosition(160, 430);
    add(copter);
    var circle = new Circle(2);
    circle.setPosition(0, getHeight());
    circle.setColor(Color.black);
    add(circle);
    var line = new Line(0, getHeight(), 3, getHeight());
    add(line);
}