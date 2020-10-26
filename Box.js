class Box extends BaseClass{

    constructor(x,y){

        super(x,y,50,20);

    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.width,this.height);
        super.display();

    }


}