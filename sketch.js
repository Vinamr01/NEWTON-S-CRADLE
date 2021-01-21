
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1 ,  bobObject2 ,  bobObject3 , bobObject4 , bobObject5;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
	bobObject1 = new Bob(200 , 500 , 90);
	bobObject2 = new Bob(200+90 , 500 , 90);
	bobObject3 = new Bob(200+180 , 500 , 90);
	bobObject4 = new Bob(200+270 , 500 , 90);
	bobObject5 = new Bob(200+270+90 , 500 , 90);

   roof = new Roof(380 , 200 , 450, 50)
   
rope = new Rope(bobObject1.body , roof.body , 180*2 , 0)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

 roof.display();

  drawSprites();
 
}



