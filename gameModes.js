/*-------------------------------------------------------
// GAME MODE
// There should be three modes for the game:
    1. Starting positions
    2. Random positions with only reds
    3. Random positions with both reds and coloured balls
---------------------------------------------------------*/

// for(var i = 0; i < 3; i++)
// {
//     ellipse(i*width/2,0,ball_diameter*1.5,ball_diameter*1.5)
//     ellipse(i*width/2,height,ball_diameter*1.5,ball_diameter*1.5)
// }  

function gameModeOne()
{
    removeAllBodies()
    boundaries.push(new Boundary(0,height/2,20,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,20)); // top boundary
    boundaries.push(new Boundary(width,height/2,20,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,20)); // bottom boundary
    cueBall = new CueBall( 0 + 2* ball_diameter,0 + 2 * ball_diameter,ball_diameter/2)
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
    colouredBalls.push(new Ball(width/2 + 10, height/2,ball_diameter/2,'blue'))
    colouredBalls.push(new Ball(width - ball_diameter * 2, height/2,ball_diameter/2,'black'))
}

function gameModeTwo()
{
    removeAllBodies()
    boundaries.push(new Boundary(0,height/2,20,height)); // left boundary
    boundaries.push(new Boundary(width/2,0,width,20)); // top boundary
    boundaries.push(new Boundary(width,height/2,20,height)); // right boundary
    boundaries.push(new Boundary(width/2,height,width,20)); // bottom boundary
    cueBall = new CueBall(width/2,height/2,ball_diameter/2)
    // red balls
    for(var j = 0; j < 5; j++) // columns
    {
        var x = width*0.8 + j * ball_diameter // each column
        var starty = height/2 - j * ball_diameter/2

        var numBalls = j + 1;

        for(var i = 0; i < numBalls; i++) //columns
        {
            var y = starty + i * ball_diameter
            var ball = new Ball(x,y,ball_diameter/2,'red')
            redBalls.push(ball)
        }
    }
    // coloured balls

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

// function addMouseConstraint()
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
