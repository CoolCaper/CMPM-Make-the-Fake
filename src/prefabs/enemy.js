//movement should be variable so enemies don't fall of platforms


//physics

//sprites different

class Enemy extends Phaser.Physics.Arcade.Sprite  {
    constructor(scene, x, y, texture, steps) {
        super(scene, x, y, texture);


        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.setScale(0.5);
        this.setCollideWorldBounds(true);
        this.speed = (160);

        this.body.setCollideWorldBounds(true)
        this.body.allowGravity = true;
        this.leftDir = 5; 
        this.rightDir = 20; 
        this.right = true;
        this.direction = 0;
        this.steps = 60;
        this.left = false;
        this.right = true;

    }
    update() {
        //walk right dir
        //walk left dir
        console
        if (this.direction < this.steps && this.body.onFloor() && this.right) {
            this.x++;
            this.direction++;
        }
        if (this.direction == this.steps) {
            this.right = false;
        }
        
        if (this.direction == 0) {
            this.right = true;
        }
        
        if (this.direction > 0 && this.body.onFloor() && !this.right) {
            this.x--;
            this.direction--;
        }
    }
        /*
        if (this.direction > this.right_dir && this.right) {
            this.right = false;
            this.direction = 0;
        }        
        
        if (this.direction > this.left_dir && !this.right) {
            this.right = false;
            this.direction = 0;
        }        
        if (this.direction <= this.rightDir + this.leftDir && !this.right) {
            this.x--;
            this.direction++;
        }
        */

    }