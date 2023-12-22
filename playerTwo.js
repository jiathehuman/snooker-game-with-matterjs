/** 
 * This class creates Player Two's object.
*/


class PlayerTwo
{
    constructor(x,y,w,h){
        this.options = {
            friction:0,
            restitution: 0.85,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, w, h, this.options);
        this.body.label = "playerTwo"; // overrides label
        this.body.description = "player two";
        this.angle = 0
        this.w = w;
        this.h = h;
        World.add(engine.world, this.body);    
    }

    show()
    {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        fill(0);
        rect(0,0,this.w,this.h)

        pop();
        // drawVertices(this.body.vertices);
    }
    move()
    {
        var pos = this.body.position;
        Matter.Body.set(this.body,"position",{
            x: pos.x += 1,
            y: pos.y += 1
        })
    }

    updateAngle(value)
    {
        this.angle += (value);
        Matter.Body.setAngularVelocity(this.body,(value))
    }

}