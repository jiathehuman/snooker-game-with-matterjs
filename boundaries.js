class Boundary
{
    constructor(x,y,w,h){

        this.options = {
            friction:0.1,
            restitution: 0.5,
            isStatic: true,
        }
        this.w = w;
        this.h = h;


        this.body = Bodies.rectangle(x, y, w, h,this.options);
        this.body.label = "boundary"; // overrides label
        this.body.description = "cushion";
        World.add(engine.world, this.body);
    }

    show()
    {
        // drawVertices(this.body.vertices);
  
        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);  
        // rotate(radians(angle));
        // rectMode(CENTER);

        stroke(0);
        fill(239, 122, 133);
        rect(0,0,this.w,this.h)
        pop();
    }
}

// function Boundary(x, y, w, h)
// {
//     this.w = w;
//     this.h = h;

//     var options = {
//         friction:0.1,
//         restitution: 1,
//         isStatic: true,
//         // collisionFilter: {mask: redCategory}
//     }

//     this.body = Bodies.rectangle(x, y, w, h,options);
//     this.body.label = "boundary"; // overrides label
//     this.body.description = "wall";
//     World.add(engine.world, this.body);

//     this.show = function()
//     {
//         // drawVertices(this.body.vertices);
  
//         var pos = this.body.position;

//         push();

//         translate(pos.x, pos.y);  
//         // rotate(radians(angle));
//         // rectMode(CENTER);

//         stroke(0);
//         fill(239, 122, 133);
//         rect(0,0,this.w,this.h)
//         pop();
//     }
// }