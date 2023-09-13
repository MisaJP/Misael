var PLAY=1;
var END=0;
var marImg, mar;
var obImg,ob;
var mImg, m;
var ground,invlin;
var score;


function preload(){
marImg=loadImage("mar.png")
groundImage = loadImage("fon.png")
mImg=loadImage("mon.png")
obImg=loadImage("obs.png")
}


function setup() {
 createCanvas(600,200);
 mar.createSprite(50,180,20,50);
 marImg.addImage("mario",mar);
 marImg.scale=0.4;

 ground = createSprite(200,200);
 ground.addImage("ground",ground);
 ground.x = ground.width /2;

 invlin = createSprite(200,190,400,10);
 invlin.visible = false;

 ob = createSprite (600,100,30,30);
 obImg.addImage ("l",ob);

 mar.setCollider("circle",0,0,40);
 mar.debug = true;
 score=0;
}

function draw() {
 
background(180);
text("Puntuación: "+ score, 500,50);
if(gameState === PLAY){

    ground.velocityX = -(4+3*score/100);
    //puntuación
    score = score + Math.round(frameCount/100);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //hacer que el trex salte al presionar la barra espaciadora
    if(keyDown("space")&& mar.y >= 140) {
        mar.velocityY = -12;
    } 

    //agregar gravedad
    mar.velocityY = mar.velocityY + 0.8
  
    if(ob.isTouching(mar)){
        gameState = END;
    }
  }
}