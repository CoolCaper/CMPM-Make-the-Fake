//movement should be variable so enemies don't fall of platforms


//physics

//sprites different

class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.leftDir = 1; 
        this.rightDir = 1; 
        this.right = true;
        this.direction = 0;

    }
    update() {
        //walk right dir
        //walk left dir
        if (this.direction <= this.rightDir && this.right) {
            this.x++;
            this.direction++;
        }
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

    }
}