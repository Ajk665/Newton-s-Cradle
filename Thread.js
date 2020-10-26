class Thread{
 
    constructor(bodyA,bodyB){

        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.05,
            length: 150

        }

        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    display(){
    
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    strokeWeight(3);
    fill("grey");
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    }

}