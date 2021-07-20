var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage,apple;
var leaves,leavesImage;
function preload(){
  gardenImg = loadImage("garden.png");
   rabbitImg=loadImage("rabbit.png");
   appleImage=loadImage("apple.png");
   leavesImage=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200,200,200);
garden.addImage(gardenImg);
 garden.scale=1.6;
  garden.velocityX=-2;
 
 rabbit=createSprite(200,300,50,50);
 rabbit.addImage(rabbitImg);
  rabbit.scale=0.1;
  
  


}


function draw() {
  background("0")
  rabbit.x=World.mouseX;
  createEdgeSprites();
  
if(garden.x<0)
 {
  garden.x=garden.width/2;
 }
 
  
  var select_sprites=Math.round(random(1,2));
  if(frameCount%80==0)
 {
   if(select_sprites==1)
   {
     createApples()
   }
   else
   {
     createLeaves()
   }
  }

   drawSprites();
}
function createApples()
{


 apple=createSprite(random(50,350),50,20,20);
 apple.addImage(appleImage)
 apple.scale=0.09;
 apple.velocityY=3;

  
  apple.lifetime=200;

}
function createLeaves()
{


 leaves=createSprite(random(50,350),50,20,20);
 leaves.addImage(leavesImage)
 leaves.scale=0.09;
 leaves.velocityY=3;

  
  leaves.lifetime=200;
}