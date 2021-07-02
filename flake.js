class flake {
    constructor(x, y, r) {
        var options = {
            density : 0.1 ,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
        this.image = loadImage("snow5.png");
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("cyan");
        image(this.image, 0, 0, 25, 25);
        
        pop();
    }

};
