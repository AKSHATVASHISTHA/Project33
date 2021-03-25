const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1;
var score;
var plinkos = []
var wallos = []
var engine, world;
var ground, ball;
var obc1;
var ball;
var wall1, wall2, wall3, wall4, wall5, wall6,wall7,wall8,wall9,wall10,wall11,wall12;
function setup() {
    var canvas = createCanvas(800, 800);
  wall1 = new Wall(60,600,10,215);
    /* wall1 = createSprite(60, 600, 10, 215);
    wall1.shapeColor = "white";
    wall2 = createSprite(120, 600, 10, 215);
    wall2.shapeColor = "white";
    wall3 = createSprite(180, 600, 10, 215);
    wall3.shapeColor = "white";
    wall4 = createSprite(240, 600, 10, 215);
    wall4.shapeColor = "white";
    wall5 = createSprite(300, 600, 10, 215);
    wall5.shapeColor = "white";
    wall6 = createSprite(360, 600, 10, 215);
    wall6.shapeColor = "white";
    wall7 = createSprite(420, 600, 10, 215);
    wall7.shapeColor = "white";
    wall8 = createSprite(480, 600, 10, 215);
    wall8.shapeColor = "white";
    wall9 = createSprite(540, 600, 10, 215);
    wall9.shapeColor = "white";
    wall10 = createSprite(600, 600, 10, 215);
    wall10.shapeColor = "white";
    wall11 = createSprite(660, 600, 10, 215);
    wall11.shapeColor = "white";
    wall12 = createSprite(720, 600, 10, 215);
    wall12.shapeColor = "white"; */
    strokeWeight(8);
    stroke("Black");
    engine = Engine.create();
    world = engine.world;
    var ball_options ={
        restitution:0.6,
        isStatic:false
    }

    ball = Bodies.circle(300,100,20, ball_options);
    World.add(world,ball);


    ground = new Ground(400, 700, 800, 20)

    for (var j = -25; j <= 800; j = j + 50) {

        plinkos.push(new Plinko(j, 100));

    }
    for (var a = -55; a <= 800; a = a + 50) {

        plinkos.push(new Plinko(a, 150));

    }
    for (var b = -15; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 200));

    }
    for (var b = -35; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 250));

    }
    for (var b = -65; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 300));

    }
    for (var b = -55; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 350));

    }
    for (var b = -5; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 400));

    }
    for (var b = -35; b <= 800; b = b + 50) {

        plinkos.push(new Plinko(b, 450));

    }
   
}

function draw() {
    background("red");
    
    fill('blue');
    text('100',10,650)
    textSize(15);
    
    text('1000',750,650)
    textSize(15);
    text('200',75,650)
    textSize(15);
    text('300',135,650)
    textSize(15);
    text('400',195,650)
    textSize(15);
    text('500',255,650)
    textSize(15);
    text('600',320,650)
    textSize(15);
    text('700',375,650)
    textSize(15);
    text('800',435,650)
    textSize(15);
    text('900',495,650)
    textSize(15);
    text('950',555,650)
    textSize(15);
    text('1000',675,650)
    textSize(15);
    text('1000',615,650)
    textSize(15);
    
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,7, 7);
    

    for (var i = 0; i < plinkos.length; i++) {

        plinkos[i].display();

    }
 
    
    text("Score: "+ score, 280,50);
    textSize(25)
    ground.display();
   wall1.display();
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
