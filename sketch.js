var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var flakes = [];
var backgroundImg

function preload() {

backgroundImg = loadImage("snow1.png")

}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

}

function draw() {
  background(backgroundImg);
 
  Engine.update(engine);
  ground.display();
  
  if (frameCount % 30 === 0) {

flakes.push(new flake(random(width/1-800, width/1+800), 10, 10));

  }

  for (var h = 0; h<flakes.length; h++ ){

flakes[h].display();

  }

}