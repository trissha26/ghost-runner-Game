var gameState = "play";

var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImage;

var climberImg, climbersGroup, climber;

var invisibleBlock, invisibleBlockGroup;


function preload(){
  
  towerImg = loadImage("tower.png");
   doorImg = loadImage("door.png");
  ghostImage = loadImage("ghost-standing.png");
  
  climberImg = loadImage("climber.png");
}


function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200, 200, 50, 50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImage);
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
}

function draw(){
  background(0);
  
  if(gameState === "play"){
    
  
 
    if(tower.y > 400){
      tower.y = 300
    }
  
  
 
   if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
  
  ghost.velocityY = ghost.velocityY + 1;
  
  if(climbersGroup.isTouching(ghost)){
  ghost.velocityY = 0;
   }
  
  if (invisibleBlockGroup.isTouching(ghost)|| ghost.y > 600){
    ghost.destroy();
    gameState = "end";
  }
  } 
    spawnDoors();
 
    
  
  
    drawSprites();
  
  if (gameState === "end"){ 
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250) } 

  }
 

  
  
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0){
    door = createSprite(200, -50);
    door.x = Math.round(random(120, 400));
    door.addImage(doorImg);
    door.velocityY = 1;
    
    
    climber = createSprite(200, 10);
    climber.x = door.x;
    climber.addImage(climberImg);
    climber.velocityY = 1;
    
    
    invisibleBlock = createSprite(200, 15);
    invisibleBlock.width = climber.width;
    invisibleBlock.x = door.x;
    invisibleBlock.height = 2;
    invisibleBlock.velocityY = 1;
    invisibleBlock.lifetime = 600;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    
    
    door.lifetime = 600;
    climber.lifrtime = 600;
    
    
    
  }
 
  }