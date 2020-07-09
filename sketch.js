const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, paperBall, dustBinObject, launcherObject;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,370,width,20);
	paperBall = new Paper(200,150,70);
	dustBinObject = new Dustbin(1000,350);
	launcherObject = new Launcher(paperBall.body, {x: 250, y:55});
	//Engine.run(engine);
  
}


function draw() {
  
  background(240);
  
  Engine.update(engine);
  ground.display();
  paperBall.display();
  dustBinObject.display();
  launcherObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(paperBall.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}