var shipImg,ship
var sea 
spriteName.addImage(seaImg)
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("sea",seaImg);
  sea.x = sea.width /2;
  sea.velocityx=-4

  ship = createSprite(200,200,20,50);
  ship.addAnimation("going", shipImg);
  ship.scale = 0.5;
  ship.visibility,true

}

function draw() {
  background(400);
 drawSprites();
}
