var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);
  path = createSprite(200, 200);
  path = addImage(pathImg);
  path = velocityY = -5;
path.scale=1.2;

 boy = createSprite(200, 200);
 boy = addImage(boyImg);
boy.scale=0.08;
  
  
leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
