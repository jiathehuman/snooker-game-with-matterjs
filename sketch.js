// var Engine = Matter.Engine;
// var World = Matter.World;
// var Bodies = Matter.Bodies;
// var Body = Matter.Body;


//aliasing with Coding train
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Query, Constraint, Composites, Composite, Events, Collision, Common} = Matter;


var engine;
var cueBall;
var walls;
var redBalls;
var backgroundisDrawn;
var defaultCategory = 0x0001, redCategory = 0x0002
var greenCategory = 0x0004
var blueCategory = 0x0008;

var gameMode
var collided_object


var p1_count = 0
var p2_count = 0
var p3_count = 0
var p4_count = 0
var p5_count = 0
var p6_count = 0

var score = 0;

function preload()
{
    bg = loadImage("assets/gp_midterms_bg.png");
}
function setup() 
{
    // background(50,100,50);

    const canvas = createCanvas(1200, 600);
    canvas.parent("canvasContainer")
    // backgroundCanvas= createGraphics(1200,600)
    // tableTexture() // creates the texture of the table


    engine = Engine.create();
    engine.world.gravity.y = 0; // since it is a pool table

    ball_diameter = width/36;

    redBalls = [];
    colouredBalls = []
    boundaries = [];
    holdingarray = [];

    gameStart();



    // //https://www.youtube.com/watch?v=CdBXmsrkaPs&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=9
    Events.on(engine, 'collisionStart', collisionStart);
    Events.on(engine, 'collisionActive', collisionActive);
    Events.on(engine, 'collisionEnd', collisionEnd)

    var lastTime = Common.now();

    // Events.on(engine, 'beforeUpdate', function(event) {
    //     var engine = event.source;

    //     // apply random forces every 5 secs
    //     if (Common.now() - lastTime >= 5000) {
    //         console.log("shake")

    //         // update last time
    //         lastTime = Common.now();
    //     }
    // });



    // events = new Events(Events)


   rectMode(CENTER)



    let buttonOne = createButton('Game Mode One');
    buttonOne.mousePressed(()=>{
        gameModeOne()
    })
    let buttonTwo = createButton('Game Mode Two');
    buttonTwo.mousePressed(()=>{
        gameModeTwo()
    })
    let buttonThree = createButton('Game Mode Three');
    buttonThree.mousePressed(()=>{
        gameModeThree()
    })
    buttonOne.parent("gameMode-buttons")
    buttonTwo.parent("gameMode-buttons")
    buttonThree.parent("gameMode-buttons")


    slider = createSlider(15,40,30);
    slider.parent("force-control");
}

function draw() 
{
    background(bg)
    Engine.update(engine);
    // engine.enableSleeping = true;

    force = slider.value();

//    image(backgroundCanvas,0,0) 
    // background(50,100,50);
        // markings on the pool table
    stroke(255);
    strokeWeight(5);
    line(width/5,0,width/5,height);
    noFill();
    arc(width/5,height/2,width/6,ball_diameter*5,HALF_PI, PI + HALF_PI,PIE);

    stroke(255);
    fill(255)
    noStroke();
    textSize(16)
    if(collided_object){
        text("Cue ball last collided with : " + collided_object, width - 280, height - 50)
    }
    textSize(20)
    text("Force to be applied is : " + force, width - 280, height - 30)    

    text("Current score is: " + score, width - 200, 50)

    fill(0) 
    noStroke()

    for(var i = 0; i < 3; i++)
    {
        fill(0)
        ellipse(i*width/2,0,ball_diameter*2)
        ellipse(i*width/2,height,ball_diameter*2)
    }  
    
    if(cueBall){
        cueBall.show()
        if(cueBall.checkPocketed()){
            cueBall.returnCueBall();
        }
    }
    // cue.show()
    // cue.updateCuePosition(mouseX,mouseY)
    for(var i = 0; i < redBalls.length; i++){
        redBalls[i].show();
        if(redBalls[i].checkPocketed())
        {
            redBalls[i].removeBall()
            redBalls.splice(i,1);
            score++;
            i--;
        }

    }

    for(var i = 0; i < colouredBalls.length; i++){
        colouredBalls[i].show();
        if(colouredBalls[i].checkPocketed())
        {
            switch(colouredBalls[i].color){
                case "yellow": score += 2;
                case "green": score += 3;
                case "brown": score += 4;
                case "blue": score += 5;
                case "pink": score += 6;
                case "black": score += 7;
            }
            colouredBalls[i].removeBall()
        }
    };


    for(var i = 0; i < boundaries.length; i++){
        boundaries[i].show();
    }

    if((p1_count || p2_count || p3_count || p4_count || p5_count || p6_count) > 1)
    {
        alert("two balls fell into the same pocket!")
        p1_count = 0
        p2_count = 0
        p3_count = 0
        p4_count = 0
        p5_count = 0
        p6_count = 0
    }

    if(gameMode != 0 && cueBall.body.speed < 0.2){
        push()
        stroke(0)
        strokeWeight(5)
        line(cueBall.body.position.x, cueBall.body.position.y, mouseX, mouseY)
 
        pop()
    }

}

// called function, and saved image as the background and loaded in preload
// function tableTexture()
// {
//     for(var i = 0; i < width; i++)
//     {
//         for(var j = 0; j < height; j++){
//             var n = noise(i,j);
//             var c = map(n, 0, 1, 50, 150);
//             backgroundCanvas.stroke(40,c,40);
//             backgroundCanvas.point(i,j);
//         }
//     }
// }


/////////
//Helper functions
////////

function drawVertices(vertices)
{
    beginShape();
    for(var i = 0; i < vertices.length; i++)
    {
        vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
}

function keyPressed(){

    if(key == "a"){
        var canMove = true;
        for(var i = 0; i < engine.world.bodies.length; i++)
        {
            if(engine.world.bodies[i].label == 'ball')
            {
                var body = engine.world.bodies[i]
                var x = body.position.x
                var y = body.position.y

                if((dist(x,y,mouseX,mouseY)) < (ball_diameter + 15))
                {
                    console.log("too near a ball")
                    canMove = false;
                    break;
                }
                
            }
        }


        if(canMove && mouseX < width  && mouseY < height) // makes sure that ball is still in pool table
        {
            console.log("Can move ball");
            cueBall.moveCueBall(mouseX,mouseY);
        }
    }

}


function mousePressed()
{
    if(!(mouseX < width && mouseY > height))
    {
        var v1 = createVector(cueBall.body.position.x - mouseX, cueBall.body.position.y - mouseY);
        v1.normalize();

        v2 = v1.mult(force);
        cueBall.shootCueBall(v2)
    }
}
