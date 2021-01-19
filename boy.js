class Boy{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,50,410,this.width, this.height);

    }
    

}