var flower;
var bg;
var gameState=0;

function preload(){

    sound1=loadSound("titanic1.mp3")
    roseimg=loadImage("rose.png");
    bgimg=loadImage("p2.jpg");
    bg2=loadImage("butter.jpg")
    zname=loadImage("images/ze.png");
    sname=loadImage("images/sh.png");
    brideimg=loadImage("images/bride.png");
    groomimg=loadImage("images/groom.png");
    heartimg=loadImage("h2.png");
    butterflyimg=loadAnimation("t1.png","t2.png","t3.png","t4.png","t5.png",);

    art2img=loadImage("images/art3.png");
    luvimg=loadImage("images/luv2.png");
}

function setup(){

    createCanvas(displayWidth,displayHeight);
    edges=createEdgeSprites();
    

    bg=createSprite(displayWidth/2,displayHeight/2)
    bg.addImage(bgimg);
    bg.scale=4.8;

    art1=createSprite(displayWidth/2,displayHeight/2);
    art1.addImage(heartimg);
    art1.scale=0.05

    zeba=createSprite(displayWidth/2+150,displayHeight/2+100)
    zeba.addImage(zname);
    zeba.scale=0.35

    shariq=createSprite(displayWidth/2-220,displayHeight/2-120)
    shariq.addImage(sname);
    shariq.scale=0.4

    bride=createSprite(displayWidth-200,displayHeight-200)
    bride.addImage(brideimg)
    bride.scale=0.01;

    groom=createSprite(200,200)
    groom.addImage(groomimg)
    groom.scale=0.01;
    
    luv=createSprite(displayWidth/2+400,displayHeight/2-100)
    luv.scale=0.01;
    luv.addImage(luvimg)

    art2=createSprite(displayWidth/2-150,displayHeight-300);
    art2.addImage(art2img);
    art2.scale=0.01


    butterfly=createSprite(displayWidth-100,100);
    butterfly.addAnimation("fly",butterflyimg);
    butterfly.velocityY=5;
    butterfly.velocityX=-5;

    zeba.visible=true;
    shariq.visible=true;
    bride.visible=true;
    groom.visible=true;
    art1.visible=true;
    luv.visible=false;
    art2.visible=false;
     sound1.play();
}

function draw(){

    background(0);
    drawSprites();
   
    //console.log(gameState)
    butterfly.bounceOff(edges);
    if(gameState==0){

        bg.addImage(bgimg)
        textSize(40)
        stroke(random(0,255),random(0,255),random(200,255));
        strokeWeight(7);
        fill ("red");
        text("&",displayWidth/2-50,displayHeight/2);

        if(frameCount<=180){
            art1.scale+=0.01
            bride.scale+=0.01
            groom.scale+=0.01
        }

        if(frameCount>250){
         gameState=1
        }

    }

    else if(gameState==1){
        luv.visible=true;
        art2.visible=true;
        if(frameCount<330){
          luv.scale+=0.01
          art2.scale+=0.01
        }
        if(frameCount>340){
            rose();
        }
        bg.addImage(bg2);
        bg.scale=2
        zeba.visible=false;
        shariq.visible=false;
        bride.visible=false;
        groom.visible=false;
        art1.visible=false;
        textSize(40);
        fill("lime")
        strokeWeight(6);
        stroke("orange")
        text ("Invited You In Their Wedding",100,100);
        text ("on",displayWidth/2-300,300);
        stroke(random(0,255),random(0,255),random(200,255));
        strokeWeight(8);
        text("9th Feb 2022",displayWidth/2-200,displayHeight-300);
    }
}

function rose(){

    if(frameCount%20==0){
        flower=createSprite(displayWidth/2+100,-50);
        flower.addImage(roseimg);
        flower.scale=0.15
        flower.velocityY=6;
        flower.x=Math.round(random(displayWidth/2+100,displayWidth-50))
        flower.lifetime=displayHeight-100;
    }

}
