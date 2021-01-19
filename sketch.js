
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, tree;
var boy;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6,  mango7,  mango8;
var sling;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,600,800,20);
  tree = new Tree(600,300,300,450);
    boy = new Boy(200,300,130,240);
    stone = new Stone(80,460,40,40,3);
	mango1 = new Mango(530,300,40,40);
	mango2 = new Mango(600,250,40,40);
	mango3 = new Mango(630,220,35,35);
	mango4 = new Mango(630,310,40,35);
	mango5 = new Mango(680,320,40,45);
	mango6 = new Mango(450,310,40,35);
	mango7 = new Mango(530,200,30,35);
	mango8 = new Mango(540,250,40,45);
    
  sling = new SlingShot(stone.body,{x:70,y:465});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display(); 
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  
  sling.display();


}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body, {x:70, y:465})
    sling.attach(stone.body);
  }
}


