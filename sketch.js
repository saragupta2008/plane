var sky,skyImage;
var plane ,planeImage;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var obstacle1Image ,obstacle2Image ,obstacle3Image,obstacle4Image,obstacle5Image;


var obstacle1Group,obstacle2Group,obstacle3Group,obstacle4Group,obstacle5Group;

var gameover,gameoverImage;
var restart,restartImage;

var gameoverSound;

var gameState="play"

function preload(){
  
  skyImage=loadImage("sky.jpg");
  
  planeImage=loadImage("plane.png");

  obstacle1Image=loadImage("obstacle1.png");
  obstacle2Image=loadImage("obstacle2.png");
  obstacle3Image=loadImage("obstacle3.png");
  obstacle4Image=loadImage("obstacle4.png");
  obstacle5Image=loadImage("obstacle5.png");
  
 gameoverImage = loadImage("gameover.jpg");
  restartImage = loadImage("restart.png");
  
  gameoverSound = loadSound("gameoverSound.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
   sky=createSprite(200,200,600,400);
   sky.addImage(skyImage);
   sky.scale=0.9;
   sky.velocityX=-3; 
  
   plane=createSprite(100,200);
   plane.addImage(planeImage);
   plane.scale=0.1
  
  
  obstacle1Group=new Group();
  obstacle2Group=new Group();
  obstacle3Group=new Group();
  obstacle4Group=new Group();
  obstacle5Group=new Group();
  
   gameover = createSprite(300,100);
  gameover.addImage(gameoverImage);
  gameover.scale=0.1
  
  restart = createSprite(300,300);
  restart.addImage(restartImage);
  restart.scale=0.5
}

function draw() {
 background("white");
 
  
  if(gameState=="play"){
  
gameover.visible = false;
restart.visible = false;
    
  plane.y=plane.y+3
    
     
   if (sky.x < 0){
     sky.x =300;
    } 
  if(keyDown("space")){
    plane.y=plane.y-10;
    
  }
  
  if(obstacle1Group.isTouching(plane)||obstacle2Group.isTouching(plane)||obstacle3Group.isTouching(plane)||obstacle4Group.isTouching(plane)||obstacle5Group.isTouching(plane)||plane.y>400)
  {
   gameState="end";
    gameoverSound.play();
    plane.visible=false;
    gameover.visible = true;
      restart.visible = true;
   
  }
  
   spawnObstacle1();
   spawnObstacle2();
   spawnObstacle3();
   spawnObstacle4();
   spawnObstacle5(); 
  }
   if(gameState=="end"){
      
    
    if(mousePressedOver(restart)) {
  reset();
 }
}
drawSprites();
  }
 
function spawnObstacle1(){
  if(frameCount%250==0){
  obstacle1=createSprite(200,Math.round(random(20,370)),10,10);
 // console.log(obstacle1.y)
  obstacle1.addImage(obstacle1Image);
  obstacle1.velocityX = -5;
  obstacle1.lifetime = 150;
  obstacle1.scale=0.01;
    
    obstacle1Group.add(obstacle1);
}
}

function spawnObstacle2(){
  if(frameCount%320==0){
  obstacle2=createSprite(200,Math.round(random(20,370)),10,10);
 // console.log(obstacle1.y)
  obstacle2.addImage(obstacle2Image);
  obstacle2.velocityX = -5;
  obstacle2.lifetime = 150;
  obstacle2.scale=0.05;
    obstacle2Group.add(obstacle2);
}
}

function spawnObstacle3(){
  if(frameCount%390==0){
  obstacle3=createSprite(200,Math.round(random(20,370)),10,10);
  //console.log(obstacle1.y)
  obstacle3.addImage(obstacle3Image);
  obstacle3.velocityX = -5;
  obstacle3.lifetime = 150;
  obstacle3.scale=0.09;
    obstacle3Group.add(obstacle4);
}
}

function spawnObstacle4(){
  if(frameCount%190==0){
  obstacle4=createSprite(200,Math.round(random(20,370)),10,10);
 // console.log(obstacle1.y)
  obstacle4.addImage(obstacle4Image);
  obstacle4.velocityX = -5;
  obstacle4.lifetime = 150;
  obstacle4.scale=0.1;
    obstacle4Group.add(obstacle4);
}
}

function spawnObstacle5(){
  if(frameCount%410==0){
  obstacle5=createSprite(200,Math.round(random(20,370)),10,10);
  //console.log(obstacle5.y)
  obstacle5.addImage(obstacle5Image);
  obstacle5.velocityX = -5;
  obstacle5.lifetime = 150;
  obstacle5.scale=0.05;
    obstacle5Group.add(obstacle5);
}
}

function reset(){
  gameState="play";
  gameover.visible=false;
  restart.visible=false;
  plane.visible=true;
  plane.y=200
  
}