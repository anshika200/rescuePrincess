 var gameState="serve";
 var lives=5;
 var score=0;
 var score1=0;
 var next ,next1;
 var wall1,wall2,wall3,wall4;
 var rule,ruleImg,stage1R,stage1RImg;
 var bg1,bg1Img;
 var pinkbImg,bluebImg,redbImg,greenbImg;
var rb1,rb2,bb1,bb2,gb1,gb2,pb1,pb2;
 var ball,paddle,ballImg,paddleImg;
 var box,boxImg,fairy,fairyImg;
 var stage2R,stage2RImg;
 var lib,libImg;
 var wood1,wood2,wood3,wood4,wood5,wood6,woodImg;
 var map,mapImg;
 var book1,book2,book3,book4,bookImg;
 var stage3RImg,stage3R,stage4R,stage4RImg;
 var hCastle,hCastleImg;
 var prince,princeRun,princeJump;
 var scaryRoad,scaryRoadImg;
 var obstacle,obstacleGroup,skull,graveStone,stone;
var witch,witchImg;
var inCastleImg,inCastle;
var arrow,arrowImage,arrowGroup;
var bow,bowImage;
var fireImg,fireGroup;
var key1 ,keyImg;
var princeKey,princeImg;
var resetImg,reset;
var endImg,end;
var GameOverImg,GameOver;
var sad,sadImg;
var text1,textImg;

function preload(){

  ruleImg=loadImage("rules.png");
  stage1RImg=loadImage("stage1.png")
  nextImg=loadImage("next.png")

  bg1Img=loadImage("background1.png")
  pinkbImg=loadImage("purpleball.png")
  bluebImg=loadImage("blueball.png")
  redbImg=loadImage("redball.png")
  greenbImg=loadImage("greenball.png")
  ballImg=loadImage("mettalball.png")
  paddleImg=loadImage("paddle.png")
  fairyImg=loadAnimation('fairyImage1.png','fairyImage2.png')
  boxImg=loadImage("box.png")
  stage2RImg=loadImage("stage2.png")
  libImg=loadImage("library.jpg");
  mapImg=loadImage("map.png")
  bookImg=loadImage("book.png")
  woodImg=loadImage("wood.png")
  hCastleImg=loadImage("castel.png")
  stage3RImg=loadImage("stage3.png")
  princeRun = loadAnimation('prince.png','prince1.png','prince2.png',
              'prince3.png','prince2.png','prince1.png','prince.png');

  princeJump = loadImage("prince.png");
  scaryRoadImg=loadImage("hauntedPath.jpg");

  skull=loadImage("skull.png");
  graveStone=loadImage("graveStone.png");
  stone=loadImage("stone.png");
  stage4RImg=loadImage("stage4.png");

  witchImg=loadAnimation('witch1.png','witch2.png','witch3.png','witch2.png')
  inCastleImg=loadImage("inCastle.png")
  arrowImage=loadImage("arrow.png")
  bowImage=loadImage("bow.png");
  fireImg=loadImage("fire.png")
  keyImg=loadImage("key.png")
  princeImg=loadImage("princekey.png")
  resetImg=loadImage("restart.png")
  endImg=loadImage("over.png")
  GameOverImg=loadImage("gameOver.png")
  sadImg=loadImage("sad.png")
  textImg=loadImage("text.png")

}

function setup() {
  createCanvas(1100, 700);

  rule=createSprite(550,350)
  rule.addImage(ruleImg);
  rule.scale=0.56;

  stage1R=createSprite(550,350)
  stage1R.addImage( stage1RImg);
  stage1R.scale=0.34

  stage2R=createSprite(550,360)
  stage2R.addImage(stage2RImg)
  stage2R.scale=0.7;
 
  stage3R=createSprite(550,360)
  stage3R.addImage(stage3RImg)
  stage3R.scale=0.7;
  
  stage4R=createSprite(550,360)
  stage4R.addImage(stage4RImg)
  stage4R.scale=0.45;
  
  end=createSprite(550,360)
  end.addImage(endImg)
  end.scale=0.8;
  
  next=createSprite(800,600);
  next.addImage(nextImg);
  next.scale=0.5;
  
  wall1=createSprite(550,0,1100,5)
  wall1.visible=false
  wall2=createSprite(0,350,5,700)
  wall2.visible=false
  wall3=createSprite(1100,350,5,700)
  wall3.visible=false
  wall4=createSprite(550,700,1100,5)
  wall4.visible=false

  bg1=createSprite(550,350)
  bg1.addImage(bg1Img);
  bg1.scale=0.45;

  paddle=createSprite(500,650)
  paddle.addImage(paddleImg)
  //paddle.debug=true

  ball=createSprite(550,350)
  ball.addImage(ballImg)
  ball.scale=0.2;
  ball.setCollider("circle",0,0,120)
  //ball.debug=true

  rb1= createSprite(100,100,50,50)
   rb1.addImage(redbImg)
  rb1.scale=0.68

  rb2= createSprite(1100,100,50,50)
   rb2.addImage(redbImg)
  rb2.scale=0.68

  bb1= createSprite(400,200,50,50)
   bb1.addImage(bluebImg)
  bb1.scale=0.68

  bb2= createSprite(700,200,50,50)
   bb2.addImage(bluebImg)
  bb2.scale=0.68

  gb1= createSprite(170,300,50,50)
   gb1.addImage(greenbImg)
  gb1.scale=0.68

  gb2= createSprite(500,300,50,50)
   gb2.addImage(greenbImg)
  gb2.scale=0.68

  pb1= createSprite(170,300,50,50)
  pb1.velocityX=-14
  pb1.velocityY=5
  pb1.addImage(pinkbImg)
  pb1.scale=0.68

  pb2= createSprite(500,300,50,50)
  pb2.velocityX=-7
  pb2.velocityY=-8
  pb2.addImage(pinkbImg)
  pb2.scale=0.68

  rb1.velocityX=6
  rb2.velocityX=-7
  bb1.velocityX=9
  gb1.velocityX=8
  bb2.velocityX=-5
  gb2.velocityX=-7

  box= createSprite(550,125)
  box.addImage(boxImg);
  box.scale=0.2

  lib=createSprite(550,350);
  lib.addImage(libImg)
  lib.scale=0.8;
  
  fairy=createSprite(500,300);
  fairy.addAnimation("fly",fairyImg);
  fairy.scale=0.12;
  //fairy.debug=true
  fairy.setCollider("circle",0,0,440)

  wood1=createSprite(270,80,30,700);
  wood1.addImage(woodImg);
  wood1.scale=0.5
    //wood1.debug=true

  wood2=createSprite(270,690,30,230);
  wood2.addImage(woodImg);
  wood2.scale=0.5

  wood3=createSprite(500,230,30,700);
  wood3.addImage(woodImg);
  wood3.scale=0.55

  wood4=createSprite(730,530,30,700);
  wood4.addImage(woodImg);
  wood4.scale=0.5;

  wood5=createSprite(940,300,30,700);
  wood5.addImage(woodImg);
  wood5.scale=0.5

  wood6=createSprite(730,-5,30,700);
  wood6.addImage(woodImg);
  wood6.scale=0.4;

  map=createSprite(1050,350,10,10)
  map.addImage(mapImg);
  map.scale=0.2
 
  book1=createSprite(190,300)
  book1.addImage(bookImg)
  book1.velocityY=9
  book1.setCollider("circle",0,0,34)

  book2=createSprite(420,300)
  book2.addImage(bookImg)
  book2.velocityY=-6
  book2.setCollider("circle",0,0,35)

  book3=createSprite(640,300)
  book3.addImage(bookImg)
  book3.velocityY=-11
 // book3.debug=true
  book3.setCollider("circle",0,0,35)

  book4=createSprite(850,300)
  book4.addImage(bookImg)
  book4.velocityY=15
  book4.setCollider("circle",0,0,34)


  scaryRoad = createSprite(500, 350)
  scaryRoad.addImage(scaryRoadImg)
  scaryRoad.scale = 4.0;
  invisiblePath = createSprite(400, 650, 1100, 10);
  invisiblePath.visible = false

  obstacleGroup=new Group();
  
hCastle=createSprite(1500,350)
hCastle.addImage(hCastleImg)
hCastle.scale=0.5

prince = createSprite(400, 480);
prince.addAnimation("run", princeRun);
prince.addAnimation("jump",princeJump)
prince.scale=0.65;
prince.frameDelay = 3;
//prince.debug=true
prince.setCollider("rectangle",0,0,100,prince.height)

inCastle=createSprite(550,350)
inCastle.addImage(inCastleImg)
inCastle.scale=0.9

witch=createSprite(200, 480)
witch.addAnimation("throw",witchImg);
witch.frameDelay=15;

princeKey= createSprite(1000, 450);
princeKey.addImage(princeImg);
princeKey.scale=0.5;

bow = createSprite(1000, 220, 20, 50);
bow.addImage(bowImage);
bow.scale = 1;

arrowGroup = new Group();
fireGroup= new Group();

key1=createSprite(500,200)
key1.addImage(keyImg);
key1.scale=0.3

gameOver=createSprite(620,350)
gameOver.addImage(GameOverImg)
gameOver.scale=2

sad=createSprite(300,350)
sad.addImage(sadImg)
sad.scale=0.6

  reset=createSprite(180,580);
  reset.addImage(resetImg);
  reset.scale=0.215;

  text1=createSprite(150,450)
  text1.addImage(textImg)
  text1.scale=0.6

}

function draw() {
  background(0);
  serve();
  stage1Rules();
  stage1();
  stage2Rules();
  stage2();
  stage3Rules();
  stage3();
  stage4Rules();
  stage4();
  over();


  //console.log(prince.y)
  

  ball.bounceOff(bb1);
  ball.bounceOff(bb2);
  ball.bounceOff(pb1);
  ball.bounceOff(pb2);
  ball.bounceOff(gb1);
  ball.bounceOff(rb1);
  ball.bounceOff(rb2);
 
  rb1.bounceOff(wall2);
  rb1.bounceOff(wall3);
  rb2.bounceOff(wall2);
  rb2.bounceOff(wall3);
  rb2.bounce(rb1);
  rb1.bounce(rb2);

  bb1.bounceOff(wall2);
  bb1.bounceOff(wall3);
  bb2.bounceOff(wall2);
  bb2.bounceOff(wall3);
  bb2.bounce(bb1);
  bb1.bounce(bb2);

  gb1.bounceOff(wall2);
  gb1.bounceOff(wall3);
  gb2.bounceOff(wall2);
  gb2.bounceOff(wall3);
  gb2.bounce(gb1);
  gb1.bounce(gb2);

  pb1.bounceOff(wall1);
  pb1.bounceOff(wall4);
  pb2.bounceOff(wall1);
  pb2.bounceOff(wall4);
  pb1.bounceOff(wall2);
  pb1.bounceOff(wall3);
  pb2.bounceOff(wall2);
  pb2.bounceOff(wall3);
  pb2.bounce(pb1);
  pb1.bounce(pb2);

    ball.bounceOff(wall1);
    ball.bounceOff(wall2);
    ball.bounceOff(wall3);
    ball.bounceOff(paddle);
    book1.bounceOff(wall4)
    book1.bounceOff(wall1)
    book2.bounceOff(wall4)
    book2.bounceOff(wall1)
    book3.bounceOff(wall4)
    book3.bounceOff(wall1)
    book4.bounceOff(wall4)
    book4.bounceOff(wall1)
    fairy.bounceOff(wood1)
    fairy.bounceOff(wood2)
    fairy.bounceOff(wood3)
    fairy.bounceOff(wood4)
    fairy.bounceOff(wood5)
    fairy.bounceOff(wood6)
    fairy.bounceOff(wall1)
    fairy.bounceOff(wall2)
    fairy.bounceOff(wall3)
    fairy.bounceOff(wall4)
    
    if (gameState==="play" && lives <= 0 ){
      gameState="end"
    }
    if (gameState==="stage1" && lives <= 0 ){
      gameState="end"
    }
    if (gameState==="stage3" && lives <= 0 ){
      gameState="end"
    }
    if (gameState==="stage5" && lives <= 0 ){
      gameState="end"
      scaryRoad.velocityX=0
      hCastle.velocityX=0
      prince.x=400
      prince.y=350
     
    }
   if (gameState==="end") {
    gameOver.visible=true
    sad.visible=true
    reset.visible=true
    text1.visible=true

 if (mousePressedOver(reset)&& gameState==="end"){
  gameState="serve"
}
}


  drawSprites();
  textSize(40);
    fill("red")
  text("Lives :  " + lives, 40, 80);
}

function serve(){
  if (gameState==="serve"){

    lives=5
    
    score=0
    score1=0
    
    if (keyDown("space") && gameState==="serve"){
      gameState="start"
    }
    rule.visible=true
    rb2.visible=false
    rb1.visible=false
    bb2.visible=false
    bb1.visible=false
    gb2.visible=false
    gb1.visible=false
    pb2.visible=false
    pb1.visible=false
   

    witch.visible=false;
    bow.visible=false;
    fairy.visible=false
    stage1R.visible=false
    scaryRoad.visible=false
    prince .visible=false
    next.visible=false
    reset.visible=false
    end.visible=false
    key1.visible=false
    stage4R.visible=false;
    end.visible=false;
    bg1.visible=false
    book1.visible=false
    book2.visible=false
    book3.visible=false
    book4.visible=false
    gameOver.visible=false
    sad.visible=false
    stage3R.visible=false;
    stage2R.visible=false;
    hCastle.visible=false 
    lib.visible=false;
    ball.visible=false;
    wood1.visible=false
    wood2.visible=false
    wood3.visible=false
    wood4.visible=false
    wood5.visible=false
    wood6.visible=false
    box.visible=false;
    inCastle.visible=false 
    princeKey.visible=false
    map.visible=false
    text1.visible=false
    paddle.visible=false

    ball.y=250
    ball.x=550
   
  }
}

function stage1Rules(){
  if (gameState==="start"){
     stage1R.visible=true;
     next.visible=true;
     rule.visible=false;
  if (mousePressedOver(next)&& gameState==="start"){
    gameState="stage1"

   ball.x=650
   ball.y=350
  }
  }
}

function stage1(){

  if (gameState==="stage1"){


    rb2.visible=true
    rb1.visible=true
    bb2.visible=true
    bb1.visible=true
    gb2.visible=true
    gb1.visible=true
    pb2.visible=true
    pb1.visible=true
   
    stage1R.visible=false;
    next.visible=false;
    bg1.visible=true;
    paddle.visible=true;
    ball.visible=true;
   box.visible=true;
   paddle.x= World.mouseX

   ball.bounceOff(gb2);

    if (ball.isTouching(box)){
 
      gameState="stage2";
     }
     if( ball.y>=700){
       lives=lives-1
       ball.y=250
       ball.x=550
     }
  } 
}
function stage2Rules(){
  if (gameState==="stage2"){
    stage2R.visible=true;
    
    next.visible=true
    rb2.visible=false
    rb1.visible=false
    bb2.visible=false
    bb1.visible=false
    gb2.visible=false
    gb1.visible=false
    pb2.visible=false
    pb1.visible=false
   bg1.visible=false;
   paddle.visible=false;
   ball.visible=false;
   box.visible=false;
   stage2R.visible=true;

   if (mousePressedOver(next) && gameState==="stage2"){
    gameState="stage3"
    fairy.visible=true;
    fairy.x=30
    fairy.y=350
  }
   }
}

function stage2(){
  
  if (gameState==="stage3"){
    
    lib.visible=true
    stage2R.visible=false
    next.visible=false
     
    fairy.visible=true
    wood1.visible=true
    wood2.visible=true
    wood3.visible=true
    wood4.visible=true
    wood5.visible=true
    wood6.visible=true
    map.visible=true
    book1.visible=true
    book2.visible=true
    book3.visible=true
    book4.visible=true

    if (keyDown("RIGHT_ARROW")) {
      fairy.x = fairy.x + 8
    }
    if (keyDown("LEFT_ARROW")) {
      fairy.x = fairy.x - 8
    }
    if (keyDown("UP_ARROW")) {
      fairy.y= fairy.y - 8
    }
    if (keyDown("DOWN_ARROW")) {
      fairy.y = fairy.y + 8
    }

    if (fairy.isTouching(book1)&& gameState==="stage3"){
     lives=lives-1
     fairy.x=30
     fairy.y=350
    }
    if (fairy.isTouching(book2)&& gameState==="stage3"){
      lives=lives-1
      fairy.x=30
      fairy.y=350
     }
     if (fairy.isTouching(book3)&& gameState==="stage3"){
      lives=lives-1
      fairy.x=30
      fairy.y=350
     }
     if (fairy.isTouching(book4)&& gameState==="stage3"){
      lives=lives-1
      fairy.x=30
      fairy.y=350
     }
    
    if (fairy.isTouching(map)&& gameState==="stage3"){
      gameState="stage4"
     
    }
 
  }
}
function stage3Rules(){
  if (gameState==="stage4"){
    stage3R.visible=true
    next.visible=true

  lib.visible=false
   fairy.visible=false
   wood1.visible=false
    wood2.visible=false
    wood3.visible=false
    wood4.visible=false
    wood5.visible=false
    wood6.visible=false
    map.visible=false
    book1.visible=false
    book2.visible=false
    book3.visible=false
    book4.visible=false
    if (mousePressedOver(next) && gameState==="stage4"){
      gameState="stage5"
    }
   }
 }


function stage3(){

  if (gameState==="stage5"){
    prince .visible=true

    stage3R.visible=false
    next.visible=false

    if(prince.y >= 463.6){
      prince.changeAnimation("run",princeRun);
    }
    
    scaryRoad.visible=true
    
    score = score + Math.round(World.frameCount % 400 == 0);

    if(keyDown("space")&&prince.y >= 463.6) {
    prince.velocityY = -19;
   prince.changeAnimation("jump",princeJump);
        }
    prince.velocityY = prince.velocityY +0.7
    prince.collide(invisiblePath);

    scaryRoad.velocityX=-(9+ score/2)
  
    if (scaryRoad.x <0) {
    scaryRoad.x = scaryRoad.width /1;
     }

      if (World.frameCount % 110 == 0) {
    obstacle= createSprite(1300,580,100,350);
    //obstacle.debug=true
    obstacle.setCollider("rectangle",0,0,200,obstacle.height)
    obstacle.velocityX=-(9+ score/2)
    obstacle.lifetime = 1300;
    obstacleGroup.add(obstacle);
    var randStone = Math.round(random(1, 3))
    switch (randStone) {
      case 1:obstacle.addImage(skull)
      obstacle.scale=0.2;
        break;
      case 2: obstacle.addImage(stone)
      obstacle.scale=0.35
        break;
      case 3: obstacle.addImage(graveStone)
      obstacle.scale=0.35
        break;
        default:
        break;
    }
   
  }
  if (prince.isTouching(obstacleGroup)){
    lives=lives-1
    obstacleGroup.destroyEach();

    }

    if (score>=10) {
     hCastle.visible=true
     hCastle.velocityX=-6
     }

     if( prince.isTouching(hCastle)&& gameState==="stage5"){
       gameState="stage6"
     }
   }
}

function stage4Rules(){
if (gameState==="stage6"){
  stage4R.visible=true;
  next.visible=true
  scaryRoad.visible=false
  prince .visible=false
  hCastle.visible=false
  obstacle.visible=false
  if (mousePressedOver(next)&& gameState==="stage6"){
    gameState="play"
  }
}
}

function stage4(){
  if (gameState==="play"){
    witch.visible=true
    princeKey.visible=true

    stage4R.visible=false;
    next.visible=false
    princeKey.y=bow.y
   
    inCastle.visible=true
    bow.visible=true;
    key1.visible=true;
    bow.y = World.mouseY
   
    if (World.frameCount % 80 == 0) {
    fire();
    }
    if (keyDown("space")) {
      Arrow();
    }
    if (arrowGroup.isTouching(fireGroup)) {
      score1= score1 + 1;
      arrowGroup.destroyEach();
      fireGroup.destroyEach();
  
    }
    if (score1>=20){
     
     key1.visible=true
     witch.visible=false
     bow.y=300
     bow.destroy();
     arrowGroup.destroyEach();
     fireGroup.destroyEach();
     prince.velocityX=-8
    }

    if (princeKey.isTouching(key1)){
      prince.velocityX=0
      gameState="over"
    }
    if (fireGroup.isTouching(bow)){
    lives=lives-1
    arrowGroup.destroyEach();
     fireGroup.destroyEach();
    }
    if (fireGroup.isTouching(princeKey)){
      lives=lives-1
      arrowGroup.destroyEach();
      fireGroup.destroyEach();
      }

  
  }
  }
  function over(){
if(gameState==="over"){
   reset.visible=true
   end.visible=true

    princeKey.visible=false
    key1.visible=false
    inCastle.visible=false
    
    if (mousePressedOver(reset)&& gameState==="over"){
      gameState="serve"
    }
}

  }

  function Arrow() {
    var arrow = createSprite(1000, 1000, 60, 10);
    arrow.addImage(arrowImage);
    arrow.y = bow.y;
    arrow.velocityX = -8;
    arrow.lifetime = 250;
    arrow.scale =1;
    arrowGroup.add(arrow);
  
  }

  function fire() {
    var fire= createSprite(-10, Math.round(random(120, 670)), 10, 10);
    fire.velocityX = (6 + score1/1)
     fire.x=witch.x
    fire.addImage(fireImg);
    fire.lifetime = 1150;
    fire.scale = 0.3;
    fireGroup.add(fire);
  }

  

