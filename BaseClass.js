class BaseClass {
    constructor(x, y, width, height, angle) {
      var options = {
        'isStatic':true,
        'density':1.5,
        'friction': 0.1,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(400, 600, this.width, this.height);
      pop();
    }
  }
  