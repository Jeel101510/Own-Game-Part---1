var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var rabbit, rabbit_running, rabbit_collided;
var jungle, invisiblejungle;

function preload(){
  rabbit_running =   loadAnimation("assets/rabbit_1.png","assets/rabbit_2.png","assets/rabbit_3.png");
  rabbit_collided = loadAnimation("assets/rabbit_1.png");
  jungleImage = loadImage("assets/bg.png");
}

function setup() {
  createCanvas(1000,600);

  rabbit = createSprite(50,200,20,50);
  rabbit.addAnimation("running", rabbit_running);
  rabbit.addAnimation("collided", rabbit_collided);
  rabbit.scale = 0.15;
  rabbit.setCollider("circle",0,0,300)

  jungle = createSprite(600,300,600,40);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;

  invisibleGround = createSprite(600,600,1600,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255); 

  rabbit.x=camera.position.x-270;
  
  if (gameState===PLAY){

    jungle.velocityX=-3

    if(jungle.x<100)
    {
       jungle.x=400
    }
  }
  drawSprites();
}