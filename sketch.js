
var monkey  ,  monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload()
{
    //monkey running animation
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() 
{
  createCanvas(600,200) 
  
    //create monkey sprite
  monkey = createSprite(50,165,20,50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.08
  
    //create ground sprite
  ground = createSprite(200,200,1200,20)
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  score = 0
}


function draw() 
{
  background(220)
  
   //display score
  fill("black");
  stroke("black")
  text("S u r v i v a l  T i m e : "+ score, 300,25);
  
   if(frameCount%30===0)
    {
      score = score + 1
    
    }
  
  //jump when the space button is pressed                  
    if(keyDown("space") && monkey.y > 160)
    {   
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 0.9
  
    if (ground.x < 0) 
    {
      ground.x = ground.width / 2;
    }

  monkey.collide(ground);
  
  bananas();
  Obstacles();
  
  drawSprites();
}


function bananas()
{
  if(frameCount%50===0)
  { var r=random(25,125)
    var banana = createSprite(650,r,20,20)
    banana.velocityX=-6
    banana.addImage("b_1" , bananaImage)
    banana.scale=0.7
   banana.depth=monkey.depth
   monkey.depth=monkey.depth+1
    
     //assign scale and lifetime to the obstacle 
   banana.scale = 0.1
   banana.lifetime = 400
  }
}


function Obstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(650,175,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage("o1", obstaceImage)
     
     //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 400;
   
   //add each obstacle to the group
   // obstaclesGroup.add(obstacle);
 }
}



