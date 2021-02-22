var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var invisibleLine;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,150,20);
    block1.shapeColor = "green";

    block2 = createSprite(280,580,150,20);
    block2.shapeColor = "red";

    block3 = createSprite(460,580,150,20);
    block3.shapeColor = "yellow";

    block4 = createSprite(650,580,150,20)
    block4.shapeColor = "brown";

    ball = createSprite(400,300,30,30);
    ball.shapeColor = "black";

    invisibleLine = createSprite(400,440,800,200);
    invisibleLine.visible = false;
}

function draw() {
    background(rgb(169,169,169));

    if(keyDown(LEFT_ARROW)){
        ball.x = ball.x-5
    }

    if(keyDown(RIGHT_ARROW)){
        ball.x = ball.x+5
    }

    if(keyDown(DOWN_ARROW)){
        ball.y = ball.y+5
    }

    if(keyDown(UP_ARROW)){
        ball.y = ball.y-5
    }
    
    if(ball.isTouching(block1)){
        ball.shapeColor =  "green";
        music.stop();
    }

    if(ball.isTouching(block2)){
        ball.shapeColor =  "red";
        music.stop();
    }

    if(ball.isTouching(block3)){
        ball.shapeColor =  "yellow";
        music.stop();
    }

    if(ball.isTouching(block4)){
        ball.shapeColor =  "brown";
        music.stop();
    }

    if(ball.isTouching(invisibleLine)){
        ball.shapeColor = "black";
        music.play();
    }


    
    //add condition to check if box touching surface and make it box
    drawSprites();
   
}
