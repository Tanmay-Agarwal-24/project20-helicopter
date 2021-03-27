var bottom;
//   declare variables of sprites
var helicopter,fire,fuel,DANGER,f,r,reset;
// declare images
var danger1img,danger2img,danger3img,resetimg,helicopterimg,fireimg,fuelimg,repairimg;
// declare fuel,health,score
var fuel=100,health=100,score=0;
// declare and set gamestate = play
var gamestate="PLAY";
// declare for change animation of animies , fuel and health
var a,b;
// f= fuel,r=repair
var f,r;

// loadImages 

function setup () {
createCanvas(400,400); 
// create helicopter
 
   helicopter = createSprite(70, 200);

  helicopter.scale=0.35;
  
    
// its  use as defolt 
  DANGER=createSprite(200,2000,10,10);
  f=createSprite(2000,2000,0,0);
  r=createSprite(2000,2000,0,0);

  reset=createSprite(200,200,20,20);

  reset.scale=0.05
   bottom=createSprite(200,400,400,5)
 }




function preload () {

helicopterimg=loadImage("helicopter.png") 
danger1img=loadImage("danger1.png")
danger2img=loadImage("danger2.png")
danger3img=loadImage("danger3-1.png")
repairimg=loadImage("repair.png")
fuelimg=loadImage("fuel.png")
fireimg=loadImage("fireimg.png")
resetimg=loadImage("reset.png")


  
  
  
  
  
  
  
  
  
  
  
  
}



 
function draw() {
 
 // create background and edges, set colleide and collide helicopter with edges 
helicopter.setVelocity(0, 0);
  reset.addImage(resetimg);
background("skyblue");
createEdgeSprites();
helicopter.collide(bottom);
helicopter.setCollider("rectangle",10,0,310,120);
f.setCollider("rectangle",10,0,f.width,f.height);
DANGER.setCollider("rectangle",10,0,DANGER.width,DANGER.height);
r.setCollider("rectangle",10,0,r.width,r.height);


fill("green");
textSize(15);
text("Score: "+score,300,20);
text("health: "+health,160,20);
text("Fuel: "+fuel,50,20);
text("Made by TANMAY AGARWAL",10,395);
 // when gamestate===play then do this
 if (gamestate==="PLAY"){
 
    helicopter.addImage(helicopterimg) 
  
  
 score = score + Math.round(getFrameRate()/60);
 if (World.frameCount%45===0){
 fuel=fuel-1; 
    
    
  }
 
 
 
 if (keyDown("space")){
   helicopter.setVelocity(0,0);
   
 }
 
 

 if (keyDown("up")||keyDown("w")){
helicopter.velocityX=0;
   helicopter.velocityY=-4;   
 }

  if (keyDown("DOWN")||keyDown("s")){
helicopter.setVelocity(0,4);
      
 }  
   if (keyDown("LEFT")||keyDown("a")){
helicopter.setVelocity(-4,0);
      
 } 
   
   if (keyDown("RIGHT")||keyDown("d")){
helicopter.setVelocity(4,0);
      
 } 
  
reset.visible=false;   
     
 
    if (frameCount %Math.round(random(100,200))===0 ){
   DANGER= createSprite(410,Math.round(random(10,390)),20,20);
   DANGER.velocityX=-5; 
   
   a=Math.round(random(1,3));
   
  }
   
   if (a===1){
  DANGER.addImage(danger1img)
   
    DANGER.scale=0.05;
   }
    if (a===2){
    DANGER.addImage(danger2img) 
  
    DANGER.scale=0.14;
   }
   
   if (a===3){
    DANGER.addImage(danger3img) 
    DANGER.scale=0.14;
   
     
     
     
   } 
 
    if (frameCount %Math.round(random(100,350))===0 ){
   b=Math.round(random(1,2));
   
 if (b===1){
     
     f=createSprite(400,Math.round (random(1,400)),20,20) ;
     f.velocityX=-5 ;
     f.addImage(fuelimg);
     
    f.scale=0.2;
    }
 if (b===2){
   r=createSprite(400,Math.round (random(1,400)),20,20); 
     r.velocityX=-5 ;
      r.addImage(repairimg);
       
r.scale=0.1;
    
    
 }
    
   
   
 }
 
 
    if (helicopter.isTouching(DANGER)){
   DANGER.destroy();
    health=health-21;
    
    
    
    
  }
    
      if (helicopter.isTouching(f)){
   f.destroy();
    fuel=fuel+14;
    
    
    
    
  }
    
      if (helicopter.isTouching(r)){
   r.destroy();
    health=health+14;
    
    
    
    
      
    }
    
      
    if(health<20&&fuel<20){
    fill("red");
    textSize("25");
    text ("low health , low fuel",100,100);
      

  }
  
 else if(health<30){
    fill("red");
    textSize("25");
    text ("low health",150,100);
      

  }
 else  if(fuel<30){
    fill("red");
    textSize("25");
    text ("low fuel",150,100);
      

  }
  if (fuel<1){
    fuel=0;
    
    
    
    
  }
    
   if (health<1){
    health=0;
    
    
    
    
    
  }

    
   if (health===0||fuel===0)  {
     gamestate="END";
     
   }
    
    
    
  
    
    
    
    
    
    
    
    
    
  }
    
  
  
  
  
  
  
  
  
  
  
  
// when gamestate=end then do this
if (gamestate==="END"){
helicopter.setVelocity(2,2) ;

fill("red");
textSize(25)  ;
text("helicopter destroyed gameover",30,80)  ;
  reset.visible=true;
  if (helicopter.x>340&&helicopter.y>360){
    helicopter.addImage(fireimg);
    
    
  }

  
  
  
}

if (mousePressedOver(reset)&&gamestate==="END"){
 gamestate="PLAY" ;
  score=0;
  fuel=100;
  health=100;
helicopter.x=60
helicopter.y=200  
 helicopter.setVelocity(0,0)
}

 
 
 if (DANGER.x<10){
   DANGER.lifetime=0;
   
 }
 
 
 if (f.x<10){
   f.lifetime=0;
   
 }
 
 if (r.x<10){
   r.lifetime=0;
   
 }
 
 

 
 
 
 
 
 
 
 
 
 
 
 

  drawSprites();
}

 
 
 

 
 
 
 
 
 
 
 
 
