/*-------------------------------------------------------
// GAME MODE
// There should be three modes for the game:
    1. Starting position in classic mode
    2. Random positions with only reds
    3. Random positions with both reds and coloured balls

As an extension, I will be adding a fourth mode:
- Player 2 added, playing concurrently to 'disturb' Player 1
---------------------------------------------------------*/

// for(var i = 0; i < 3; i++)
// {
//     ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
//     ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
// }  
function gameStart()
{
    gameMode = 0;
    boundaries.push(new Boundary(0,height/2,40,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,40)); // top boundary
    boundaries.push(new Boundary(width,height/2,40,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,40)); // bottom boundary
}

function gameModeOne()
{
    gameMode = 1;
    removeAllBodies()

    // addMouseConstraint()
    boundaries.push(new Boundary(0,height/2,40,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,40)); // top boundary
    boundaries.push(new Boundary(width,height/2,40,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,40)); // bottom boundary


    // for(var i = 0; i < 3; i++)
    // {
    //     p1 = new Pocket(i*width/2,0, ball_diameter*1.5)
    //     p2 = new Pocket(i*width/2,height,ball_diameter*1.5)
    //     pockets.push(p1,p2)
    // }  
    

    // cue = new Cue(width/2,100,10,200);
    cueBall = new CueBall(width/2, 0 + height/2 - 100,ball_diameter/2)

    // red balls
    for(var j = 0; j < 5; j++) // columns
    {
        var x = width * 0.7 + j * (ball_diameter + 5) // each column
        var starty = height/2 - j * ball_diameter/2

        var numBalls = j + 1;

        for(var i = 0; i < numBalls; i++) //columns
        {
            var y = starty + i * ball_diameter + 5
            var ball = new Ball(x,y,ball_diameter/2,'red')
            redBalls.push(ball)
        }
    }
    // coloured balls
    colouredBalls.push(new Ball(width* 0.7 - ball_diameter * 3, height/2,ball_diameter/2,'pink'))
    colouredBalls.push(new Ball(width/5, height/2 - 2.5*ball_diameter,ball_diameter/2,'green'))
    colouredBalls.push(new Ball(width/5, height/2,ball_diameter/2,'brown'))
    colouredBalls.push(new Ball(width/5, height/2 + 2.5*ball_diameter,ball_diameter/2,'yellow'))
    colouredBalls.push(new Ball(width/2, height/2,ball_diameter/2,'blue'))
    colouredBalls.push(new Ball(width - ball_diameter * 2, height/2,ball_diameter/2,'black'))
}

function gameModeTwo()
{
    gameMode = 2;
    removeAllBodies();
    // addMouseConstraint();
    boundaries.push(new Boundary(0,height/2,40,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,40)); // top boundary
    boundaries.push(new Boundary(width,height/2,40,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,40)); // bottom boundary
    
    // for(var i = 0; i < 3; i++)
    // {
    //     p1 = new Pocket(i*width/2,0, ball_diameter*1.5)
    //     p2 = new Pocket(i*width/2,height,ball_diameter*1.5)
    //     pockets.push(p1,p2)
    // }  

    // cue = new Cue(width/2,100,10,200);
    cueBall = new CueBall( 0 + 2* ball_diameter,0 + 2 * ball_diameter,ball_diameter/2)

    for(var i = 0; i < 16; i++)
    {
        var x = random(0,width)
        var y = random(0, height)
        var ball = new Ball(x,y,ball_diameter/2,'red')
        redBalls.push(ball)
    }
}

function gameModeThree()
{
    gameMode = 3;
    removeAllBodies()
    // addMouseConstraint()
    boundaries.push(new Boundary(0,height/2,40,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,40)); // top boundary
    boundaries.push(new Boundary(width,height/2,40,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,40)); // bottom boundary

    // for(var i = 0; i < 3; i++)
    // {
    //     p1 = new Pocket(i*width/2,0, ball_diameter*1.5)
    //     p2 = new Pocket(i*width/2,height,ball_diameter*1.5)
    //     pockets.push(p1,p2)
    // }  
    

    // cue = new Cue(width/2,50,ball_diameter/2);
    cueBall = new CueBall( 0 + 2* ball_diameter,0 + 2 * ball_diameter,ball_diameter/2)

    for(var i = 0; i < 16; i++)
    {
        var x = random(0,width)
        var y = random(0, height)
        var ball = new Ball(x,y,ball_diameter/2,'red')
        redBalls.push(ball)
    }

    // coloured balls
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'pink'))
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'green'))
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'brown'))
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'yellow'))
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'blue'))
    colouredBalls.push(new Ball(random(0,width), random(0,height),ball_diameter/2,'black'))
}

function gameModeFour()
{
    gameMode = 4;
    removeAllBodies()

    // addMouseConstraint()
    boundaries.push(new Boundary(0,height/2,40,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,40)); // top boundary
    boundaries.push(new Boundary(width,height/2,40,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,40)); // bottom boundary


    cueBall = new CueBall(width/2, 0 + height/2 - 100,ball_diameter/2)
    playerTwo = new PlayerTwo(width/2, height/2 - 50, 100,20)

    // red balls
    for(var j = 0; j < 5; j++) // columns
    {
        var x = width * 0.7 + j * (ball_diameter + 5) // each column
        var starty = height/2 - j * ball_diameter/2

        var numBalls = j + 1;

        for(var i = 0; i < numBalls; i++) //columns
        {
            var y = starty + i * ball_diameter + 5
            var ball = new Ball(x,y,ball_diameter/2,'red')
            redBalls.push(ball)
        }
    }
    // coloured balls
    colouredBalls.push(new Ball(width* 0.7 - ball_diameter * 3, height/2,ball_diameter/2,'pink'))
    colouredBalls.push(new Ball(width/5, height/2 - 2.5*ball_diameter,ball_diameter/2,'green'))
    colouredBalls.push(new Ball(width/5, height/2,ball_diameter/2,'brown'))
    colouredBalls.push(new Ball(width/5, height/2 + 2.5*ball_diameter,ball_diameter/2,'yellow'))
    colouredBalls.push(new Ball(width/2, height/2,ball_diameter/2,'blue'))
    colouredBalls.push(new Ball(width - ball_diameter * 2, height/2,ball_diameter/2,'black'))
}

function removeAllBodies()
{
    // engine.world.bodies.forEach((body)=>{
    //     if(body.label != "Rectangle Body"){
    //         Matter.Composite.remove(engine.world, body)
    //     }
    // })
    Composite.clear(engine.world);
    redBalls = [];
    colouredBalls = [];
    boundaries = [];
    cueBall = null;
}

// function addMouseConstraint(canvas)
// {
//     var mouse = Mouse.create(canvas.elt);
//     var options =
//     {
//         mouse: mouse
//     }
//     mouse.pixelRatio = pixelDensity()
//     mConstraint = MouseConstraint.create(engine, options)
//     World.add(engine.world, mConstraint);
// }

// function freezePlay()
// {
//     engine.world.bodies.forEach((body)=>{
//             Matter.Body.setStatic(body, true)
//     })
// }
