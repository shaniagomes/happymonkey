var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  //create Obstacle and Food Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
 // monkey.debug = true
  
  score = 0;
  
}


function draw() {
background(255);
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  //jump when the space key is pressed
  if (keyDown("space")&& monkey.y >= 150){
    monkey.velocityY=-12;
  }
  
  //add gravity
  monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground)
          
  stroke("white")
  textSize(20)
  fill("black");
  //displaying score
  text("Score: "+ score, 250,50);
  
  stroke("black")
  textSize(20)
  fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival time: "+ survivalTime,80,50);
  
  
  //spawn obstacles on the ground
  obstacles();
  
  //spawn the food
  food();
   
  drawSprites();
  
}

function food(){
  if (frameCount % 80 === 0){
    var banana=createSprite(360,80,40,10)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale=0.1;
    banana.visible=true;
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //add each banana to the group
    FoodGroup.add(banana);
 }
}

function obstacles(){
  if (frameCount % 300 === 0){ 
  var obstacle = createSprite(250,326,10,40);
  obstacle.velocityX = -4
  obstacle.scale=0.1;
  obstacle.addImage(obstaceImage);
  obstacle.visible=true;
   
//assign scale and lifetime to the obstacle           
    obstacle.lifetime = 220;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


