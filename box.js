class Box {
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.Visibility = 255;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        if (this.body.speed < 20) {
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(4);
            stroke("yellow");
            fill("red");
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
        }


    }
}