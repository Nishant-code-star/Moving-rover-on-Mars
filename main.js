Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

Nasa_array=["Mars_1.jpg", "Mars_2.jpg", "Mars_3.jpg", "Mars_4.jpg"];

random_number=Math.floor(Math.random()*4);
background_image=Nasa_array[random_number];

function add() {
    background_img1 = new Image();
    background_img1.onload = uploadBackground;
    background_img1.src = background_image;

    rover_img1 = new Image();
    rover_img1.onload = uploadRover;
    rover_img1.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img1, 0, 0, Canvas.width, Canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img1, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '37') {
        Left();
        console.log("left");
    }
    if (keypressed == '38') {
        Up();
        console.log("up");
    }
    if (keypressed == '39') {
        Right();
        console.log("right");
    }
    if (keypressed == '40') {
        Down();
        console.log("down");
    }
}

function Up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function Down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function Right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}
function Left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}

