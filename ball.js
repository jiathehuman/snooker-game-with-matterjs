/** 
 * I used The Coding Train's tutorial on Matter.js to figure out how to separate each Matter.js Body into a class.
*/

// function Ball(x, y, r, color)
// {
//     var options = {
//         friction:0.1,
//         restitution: 1,
//         isStatic: false,
//         collisionFilter: {category :blueCategory},
//     }

//     this.originalx = x
//     this.originaly = y

//     this.body = Bodies.circle(x, y, r, options);
//     this.body.label = "ball"; // overrides label
//     this.r = r;
//     World.add(engine.world, this.body);

//     this.show = function()
//     {
//         var pos = this.body.position;
//         var angle = this.body.angle;

//         push();
//         translate(pos.x, pos.y);
//         rectMode(CENTER);
//         strokeWeight(2)
//         stroke(0)
//         fill(color);
//         ellipse(0,0,this.r*2);
//         pop();
//     }
//     this.checkPocketed = function()
//     {
//         var pos = this.body.position;
//         var string = checkPocketed(pos.x,pos.y)
//         if(string != false){
//             return true
//         }

//     }
//     this.removeBall = function()
//     {
//         var obj = {
//             x: this.originalx,
//             y: this.originaly,
//             color: color,
//             options: options

//         }
//         World.remove(engine.world, this.body);
//         return obj
//     }
// }

class Ball{
    constructor(x,y,r,color){
        this.options = {
            friction:0.1,
            restitution: 1,
            isStatic: false,
            collisionFilter: {category :blueCategory},
        }
        this.originalx = x
        this.originaly = y

        this.body = Bodies.circle(x, y, r, this.options);
        this.body.label = "ball"; // overrides label
        this.r = r;
        this.color = color
        World.add(engine.world, this.body);
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(2)
        stroke(0)
        fill(this.color);
        ellipse(0,0,this.r*2);
        pop();
    }
    checkPocketed()
    {
        var pos = this.body.position;
        var string = checkPocketed(pos.x,pos.y)
        if(string != false){
            return true
        }
    }
    removeBall()
    {
        var obj = {
            x: this.originalx,
            y: this.originaly,
            color: this.color,
            options: this.options
        }
        World.remove(engine.world, this.body);
        return obj
    }
    checkPosition()
    {
        
    }
}

