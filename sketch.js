//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;

function setup() {
  createCanvas(1300, 800)
  engine = Engine.create();

  world = engine.world;
  
  ground = new Ground(200, 800, 1300, 20);

  box = new Box(200, 400);
  

 console.log(ground);

}

function draw() {

  background(255,255,255); 
  Engine.update(engine);

  ground.display();
  box.display();
  
}