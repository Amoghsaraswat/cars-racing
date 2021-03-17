canvas = document.getElementById("three");
ctx = canvas.getContext("2d");
rw = 100;
rh = 90;
bi = "https://i.postimg.cc/bv5d35nK/racing.jpg";
ri = "https://i.postimg.cc/YqdnnNX1/car1.png";
rx = 10;
ry = 10;
rw2 = 100;
rh2 = 90;
ri2="https://i.postimg.cc/tnnW1Kff/car2.png";
rx2 = 10;
ry2 = 100;
function Add() {
    bit = new Image();
    bit.onload = ub;
    bit.src = bi;
    rit = new Image();
    rit.onload = ur;
    rit.src = ri;
    cit = new Image();
    cit.onload = ur2;
    cit.src = ri2;
}

function ub() {
    ctx.drawImage(bit, 0, 0, 800, 600);
}

function ur() {
    ctx.drawImage(rit, rx, ry, rw, rh);
}
function ur2() {
    ctx.drawImage(cit, rx2, ry2, rw2, rh2);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
 if (keyPressed == '65') {
        aup();
        console.log("up");
    }
    if (keyPressed == '87') {
        wdown();
        console.log("down");
    }
    if (keyPressed == '83') {
        sleft();
        console.log("left");
    }
    if (keyPressed == '68') {
        dright();
        console.log("right");
    } 
    if(rx > 700)
	{
		console.log("car1");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}
	else if(rx2 > 700)
	{
		console.log("car2");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}
}
function up() {
    if (ry >= 0) {
        ry = ry - 10;
        console.log("When up arrow is pressed, x = " + rx + " | y = " + ry);
       ub();
        ur();
        ur2();
    }
}

function down() {
    if (ry <= 500) {
        ry = ry + 10;
        console.log("When down arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
        ur2();
    }
}

function left() {
    if (rx >= 0) {
        rx = rx - 10;
        console.log("When left arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
        ur2();
    }
}

function right() {
    if (rx <= 700) {
        rx = rx + 10;
        console.log("When right arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
        ur2();
    }
}
function aup() {
    if (ry2 >= 0) {
        ry2 = ry2 - 10;
        console.log("When up arrow is pressed, x = " + rx2 + " | y = " + ry2);
       ub();
        ur();
        ur2();
    }
}

function wdown() {
    if (ry2 <= 500) {
        ry2 = ry2 + 10;
        console.log("When down arrow is pressed, x = " + rx2+ " | y = " + ry2);
        ub();
        ur();
        ur2();
    }
}

function sleft() {
    if (rx2 >= 0) {
        rx2 = rx2 - 10;
        console.log("When left arrow is pressed, x = " + rx2+ " | y = " + ry2);
        ub();
        ur();
        ur2();
    }
}

function dright() {
    if (rx2 <= 700) {
        rx2 = rx2 + 10;
        console.log("When right arrow is pressed, x = " + rx2 + " | y = " + ry2);
        ub();
        ur();
        ur2();
    }
}
