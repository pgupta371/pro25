const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1, trash1, trash2, trash3, ground;

function preload() {
	img = loadImage('Sprites/trash.png')
}

function setup() {
	var canvas = createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	
	paper1 = new paper(200,300);
	trash1 = new trash(800,680,150,15);
	trash2 = new trash(725,600,15,170);
	trash3 = new trash(875,600,15,170);
	ground = new Ground(700,700,1400,20);
	Engine.run(engine);
  
}


function draw() {
	background(255);
	Engine.update(engine);
	
	ground.display();
	trash1.display();
	trash2.display();
	trash3.display();
	image(img,700,490,200,200);
	paper1.display();
}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x:110,y:-110});
	}
}

