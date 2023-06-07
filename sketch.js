var sea,ship;
var seaImg,shipImg1;

function preload(){
  // Descomente o código para adicionar animação ao navio

  shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(0,200);
  sea.addImage(seaImg);
  
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  //ship.mirrorX(-1)
}

function draw() {
  background(0);
  sea.velocityX = 5;

  // Descomente o código para redefinir o fundo
  if(sea.x > 625){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

 
  drawSprites();
}