var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {isStatic:true, restitution:0.5});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  if(starBody.position.y>470){
	starBody = Bodies.circle(650 , 480 , 5 , {isStatic:true, restitution:0.5});

  }
  if(fairy.isTouching(star)){
	starBody = Bodies.circle(650 , 480, 5 , {isStatic:true, restitution:0.5});
  }
  star.x = starBody.position.x
  star.y = starBody.position.y
  drawSprites();
  

}

function keyPressed() {
	//write code here
	if (keyCode === LEFT_ARROW){
         fairy.velocityX = -3
	} else 
	if (keyCode === RIGHT_ARROW){
		fairy.velocityX = 3
		fairyVoice.play();
	} else fairy.velocityX = 0
	if (keyCode === DOWN_ARROW){
		starBody = Bodies.circle(650 , 30 , 5 , {isStatic:false, restitution:0});
	World.add(world, starBody);
		star.y = starBody.position.x
  star.y = starBody.position.y
  
	}
}