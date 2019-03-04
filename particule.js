function Particule() {
    this.x = 0;
    this.y = 0;

    this.init = function (x, y) {
        this.radius = Math.floor((Math.random() * 7) + 5); // random size
        //this.weight = this.size * this.size; // non used here but should be used for gravity velocity calculus
        this.x = x;
        this.y = y;
        this.vx = Math.random() * 2 - 1; // velocity x
        this.vy = -12;//Math.random() * 2 - 1; // velocity y
        this.gravity = 0.2; // how much force we apply with gravity
        this.damping = 0.4; // how much the redistance is when particule will bounce on walls
        this.traction = 0.7; // how much bouce effect is applied
    }

    this.doGravity = function() {
        
        // handle collision 
        if (this.x + this.radius >= 640) {
            this.vx = -this.vx * this.damping;
            this.x = 640 - this.radius;
        } else if (this.x - this.radius <= 0) {
            this.vx = -this.vx * this.damping;
            this.x = this.radius;
        }
        if (this.y + this.radius >= 480) {
            this.vy = -this.vy * this.damping;
            this.y = 480 - this.radius;
            // traction here
            this.vx *= this.traction;
        } else if (this.y - this.radius <= 0) {
            /*this.vy = -this.vy * this.damping;
            this.y = this.radius;*/
        }
    
        this.vy += this.gravity;
    
        this.x += this.vx;
        this.y += this.vy;
    }

    this.show = function() {
        fill(255);
        ellipse(this.x - this.radius / 2, this.y - this.radius / 2, this.radius, this.radius);
    }
}