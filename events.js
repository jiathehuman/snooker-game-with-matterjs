//    //https://www.youtube.com/watch?v=CdBXmsrkaPs&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_&index=9
// function collision(event)
//    {
    
//        var pairs = event.pairs;
//        var clonedBalls = []
//        for(var i = 0; i < pairs.length; i++)
//        {

//            var bodyA = pairs[i].bodyA
//            var bodyB = pairs[i].bodyB
//            var bodyALabel = bodyA.label;
//            var bodyBLabel = bodyB.label;

//            if(bodyALabel == "ball" && bodyBLabel == "pocket"){
//             //  bodyA.position = bodyA.positionPrev
//             // World.remove(engine.world, bodyA);
//             // World.add(engine.world, bodyA)
//             //  console.log(bodyA)
//            }

//            if(bodyALabel == "pocket" && bodyBLabel == "ball"){
//             // bodyB.returnToPosition()
//             // console.log("returned to position")
//             clonedBody = bodyB
//             console.log(bodyB.id)
//             World.remove(engine.world.bodyB)
//             // World.add(engine.world,clonedBody)
//             // clonedBall = Matter.Common.clone(bodyB)
//             // console.log(clonedBall)
//             // clonedBalls.push(clonedBall)
//             // World.add(engine.world, clonedBall)
//         //    Matter.Body.set(bodyB, "position",{x: bodyB.originalx, y: bodyB.originaly})
//           }
     
//         //    if((bodyALabel == "ball" && bodyBLabel == "pocket")|| (bodyALabel == "pocket" && bodyBLabel == "ball"))
//         //    {
//         //        console.log("pocket is hit by ball")
//         //    }
//        }
//        // console.log(event)
//        for(var i = 0; i < clonedBalls.length;i++)
//        {
//         // World.add(engine.world, clonedBalls[i])
//         break;
//        }

//    }
// function Events(Events){
    // Events.on(engine, 'collisionStart', collisionStart);
    // Events.on(engine, 'collisionAction', collisionActive);

function collisionStart(event)
{
    var pairs = event.pairs;
    // var collided_object
    for(var i = 0; i < pairs.length; i++)
    {
        var pair = pairs[i]
        var bodyA = pair.bodyA
        var bodyB = pair.bodyB
        var bodyALabel = bodyA.label;
        var bodyBLabel = bodyB.label;

        if(bodyALabel == "cueBall")
        {
            console.log(bodyB.description)
            collided_object = bodyB.description
        }
        if(bodyBLabel == "cueBall")
        {
            console.log(bodyA.description)
            collided_object = bodyA.description
        }
    }
    fill(255)
    noStroke()
    textSize(20)
    // console.log(collided_object)
}

function collisionActive(event)
{
// console.log("a collision is active")
    //    var pairs = event.pairs;
    //    for(var i = 0; i < pairs.length; i++)
    //    {
    //        var bodyA = pairs[i].bodyA
    //        var bodyB = pairs[i].bodyB
    //        var bodyALabel = bodyA.label;
    //        var bodyBLabel = bodyB.label;

    //        if(bodyALabel || bodyBLabel == "cueBall")
    //        {
    //         console.log("cueball is colliding")
    //        }
    //    }
}

function collisionEnd(event)
{
    // console.log("collision ended")

//     var pairs = event.pairs;
//     var collided_object
//     for(var i = 0; i < pairs.length; i++)
//     {
//         var bodyA = pairs[i].bodyA
//         var bodyB = pairs[i].bodyB
//         var bodyALabel = bodyA.label;
//         var bodyBLabel = bodyB.label;

//         if(bodyALabel == "cueBall")
//         {
//          collided_object = bodyB.description
//         }
//         if(bodyBLabel == "cueBall")
//         {
//          collided_object = bodyA.description
//         }
//     }
//     fill(255)
//     noStroke()
//     textSize(20)
//     console.log(collided_object)
// }
}

   
