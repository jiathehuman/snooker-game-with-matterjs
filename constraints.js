function addMouseConstraint()
{
    var startdrag_x
    var startdrag_y
    var enddrag_x
    var enddrag_y

    var mouse = Mouse.create(document.body),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        collisionFilter: {mask:redCategory},
        constraint: {
            stiffness: 0.2,
            render: {
                visible: true
            },
            // collisionFilter:{category:redCategory}
        }
    });
    World.add(engine.world, mouseConstraint);

    Events.on(mouseConstraint, 'startdrag', function(event) {
        // console.log('mousedown', event);
        // startdrag_x = event.mouse.position.x
        // startdrag_y = event.mouse.position.y
        // console.log(startdrag_x)
    });

    Events.on(mouseConstraint, 'enddrag', function(event) {
        // console.log('mousedown', event);
        // enddrag_x = event.mouse.position.x
        // enddrag_y = event.mouse.position.y
        // console.log(event.mouse.position)
    });

    // console.log(startdrag_x)


    // var appliedForce_x = startdrag_x - enddrag_x
    // var appliedForce_y = startdrag_y - enddrag_x

    // var appliedForceVector = {x:appliedForce_x, y:appliedForce_y}
    // Body.applyForce(cueBall,{x:cueBall.body.position.x,y:cueBall.body.position.y},appliedForceVector)

}