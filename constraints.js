function addMouseConstraint()
{
    //     var mouse = Mouse.create(canvas.elt);
    //     var options =
    //     {
    //         mouse: mouse
    //     }
    //     mouse.pixelRatio = pixelDensity()
    //     mConstraint = MouseConstraint.create(engine, options)
    //     World.add(engine.world, mConstraint);
    // this.show()
    // {
    //     var pos = mConstraint.body.position;
    //     var m = mConstraint.mouse.position;
    //     stroke(0,255,0);
    //     line(pos.x, pos.y, m.x, m.y)
    // }

    var mouse = Mouse.create(canvas.elt),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            // collisionFilter: redCategory,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: true
                }
            }
        });
        World.add(engine.world, mouseConstraint);
    
    // this.show()
    // {
    //     var pos = mConstraint.body.position;
    //     var m = mConstraint.mouse.position;
    //     stroke(0,255,0);
    //     line(pos.x, pos.y, m.x, m.y)
    // }
}