
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var box1,box2,box3,box4,box5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(400,200,100,20);
	box2 = new Box(450,200,100,20);
	box3 = new Box(500,200,100,20);
	box4 = new Box(350,200,100,20);
	box5 = new Box(300,200,100,20);

	ball1 = new Ball(400,400);
	ball2 = new Ball(450,400);
	ball3 = new Ball(500,400);
	ball4 = new Ball(350,400);
	ball5 = new Ball(300,400);
	Engine.run(engine);

	sling = new Thread(ball1.body,box1.body);
	sling1 = new Thread(ball2.body,box2.body);
	sling2 = new Thread(ball3.body,box3.body);
	sling3 = new Thread(ball4.body,box4.body);
	sling4 = new Thread(ball5.body,box5.body);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  fill("Black");
  textSize(25);
  text("Newtons Cradle",310,100)
  textSize(15);
  text("RIGHT ARROW",525,350);
  text("LEFT ARROW",175,350)
  text("Newton's Cradle is used to show how kinetic energy is conserved in collisions",150,150);
  textSize(50);
  text("BY AJAY",300,600);
  
  
  drawSprites();
  sling.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
}


function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:80,y:-80})
	 } 
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-80,y:80})
	 } 
}