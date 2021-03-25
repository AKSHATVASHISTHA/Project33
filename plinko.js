class Plinko{
    constructor(x, y) {
        var options= {
            'frictionAir':0,
            'restitution':1,
            'density':0.9,
            'isStatic':true
            }
       
           this.body=Bodies.circle(x,y,5, options);
           this.r=10;
            World.add(world,this.body)
            console.log(this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("yellow")
        ellipse(0,0,this.r,this.r);
        pop();
      }
}


