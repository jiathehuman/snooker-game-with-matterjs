function addMouseConstraint()
{
    var mouse = Mouse.create(document.body),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        // collisionFilter: {category:redCategory},
        constraint: {
            stiffness: 0.2,
            render: {
                visible: true
            }
        }
    });
    World.add(engine.world, mouseConstraint);
    // console.log(mouseConstraint.collisionFilter.group)
    // this.show()
    // {
    //     var pos = mConstraint.body.position;
    //     var m = mConstraint.mouse.position;
    //     stroke(0,255,0);
    //     line(pos.x, pos.y, m.x, m.y)
    // }

    // var mouse = Mouse.create(canvas.elt),
    //     mouseConstraint = MouseConstraint.create(engine, {
    //         mouse: mouse,
    //         // collisionFilter: redCategory,
    //         constraint: {
    //             stiffness: 0.2,
    //             // collisionFilter: {mask: greenCategory | redCategory},

    //             render: {
    //                 visible: true
    //             }
    //         }
    //     });
    //     World.add(engine.world, mouseConstraint);
    
    // mouseConstraint.collisionFilter.mask = redCategory;
    
    // this.show()
    // {
    //     var pos = mConstraint.body.position;
    //     var m = mConstraint.mouse.position;
    //     stroke(0,255,0);
    //     line(pos.x, pos.y, m.x, m.y)
    // }
}