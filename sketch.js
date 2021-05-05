const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
 


function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,height,1600,20);
    b1 = new Building(1000, 650, 80,80 )
    b2 = new Building(1000, 570, 80,80 )
    b3 = new Building(1000, 490, 80,80 )
    b4 = new Building(1000, 410, 80,80 )
    b5 = new Building(1000, 330, 80,80 )
    ball = new Ball(800,460,60)
    rope = new Rope(ball.body , {x:800 , y:100} )
}

function draw(){
 
    background("lightblue");

    Engine.update(engine);

    ground.display();
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    rope.display()
    ball.display()
    

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX , y: mouseY})
}

