const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world;
var ball;
var ground;
var sling;
var ground2;
var ground3;

//big pyramid
//down level of the big pyramid
var block;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;

// fourth level of the big pyramid
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;

// third level of the big pyramid
var block14;
var block15;
var block16;
var block17;

//second level of the big pyramid
var block18;
var block19;

//first level of the big pyramid
var block20;


//small pyramid
// down level small pyramid
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;

//third level of small pyramid
var block27;
var block28;
var block29;
var block30;

//second level of small pyramid
var block31;
var block32;

//first level of small pyramid
var block33;

//           END            //


function preload() {

}

function setup() {
  var canvas = createCanvas(2000, 1200);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000, 1190, width, 50);
  ground2 = new Ground(950, 1050, 600, 30);
  ground3 = new Ground(1585, 700, 450, 30);

  //big pyramid
  // down level of the pyramid
  block = new Box(772, 1040, 50, 60);
  block1 = new Box(820, 1040, 50, 60);
  block2 = new Box(870, 1040, 50, 60);
  block3 = new Box(920, 1040, 50, 60);
  block4 = new Box(970, 1040, 50, 60);
  block5 = new Box(1020, 1040, 50, 60);
  block6 = new Box(1070, 1040, 50, 60);
  block7 = new Box(1120, 1040, 50, 60);

  // fourth level
  block8 = new Box(820, 940, 50, 60);
  block9 = new Box(870, 940, 50, 60);
  block10 = new Box(920, 940, 50, 60);
  block11 = new Box(970, 940, 50, 60);
  block12 = new Box(1020, 940, 50, 60);
  block13 = new Box(1070, 940, 50, 60);

  //third level
  block14 = new Box(870, 840, 50, 60);
  block15 = new Box(920, 840, 50, 60);
  block16 = new Box(970, 840, 50, 60);
  block17 = new Box(1020, 840, 50, 60);

  //second level
  block18 = new Box(920, 740, 50, 60);
  block19 = new Box(970, 740, 50, 60);

  //first level
  block20 = new Box(940, 640, 50, 60);


  //small pyramid
  //down level of small pyramid
  block21 = new Box(1456, 690, 50, 60);
  block22 = new Box(1505, 690, 50, 60);
  block23 = new Box(1555, 690, 50, 60);
  block24 = new Box(1605, 690, 50, 60);
  block25 = new Box(1655, 690, 50, 60);
  block26 = new Box(1705, 690, 50, 60);

  //third level of small pyramid
  block27 = new Box(1505, 590, 50, 60);
  block28 = new Box(1555, 590, 50, 60);
  block29 = new Box(1605, 590, 50, 60);
  block30 = new Box(1655, 590, 50, 60);

  //second level of small pyramid
  block31 = new Box(1555, 490, 50, 60);
  block32 = new Box(1605, 490, 50, 60);

  //first level of small pyramid
  block33 = new Box(1580, 390, 50, 60);

  ball = new Ball(300, 540, 30);
  sling = new SlingShot(ball.body, { x: 300, y: 640 })

}

function draw() {
  background(0);

  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();

  ball.display();

  sling.display();

  //  START  //

  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();

  //     END     //

}

function mouseDragged() {
  Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(ball.body, { x: 300, y: 640 });
    sling.attach(ball.body);
  }

}