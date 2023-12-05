<<<<<<< HEAD
//movement should be variable so enemies don't fall of platforms


//physics

//sprites different

class Scooby extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.scoob_path = './assets/Scooby.png'
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
=======
class Scooby extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y,) {
        super(scene, x, y, 'Scooby');

        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.setScale(0.5);
        this.setCollideWorldBounds(true);
        this.speed = (160);

        this.body.setCollideWorldBounds(true)
        this.body.allowGravity = true;
        // Set up cursor keys
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }



    update() {

        if (this.cursors.left.isDown) {
            this.setFlipX(true);
            this.setVelocityX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.setFlipX(false);
            this.setVelocityX(this.speed);
        } else {
            this.setVelocityX(0);
        }
    
        // Player jumping
        if (this.jumpKey.isDown && this.body.onFloor()) {
            this.setVelocityY(-400); // Adjust the jump velocity as needed
        }
    
        // Apply custom gravity to achieve a more realistic jump arc
        if (this.body.velocity.y < 0) {
          this.setGravityY(500); // Adjust the negative gravity as needed
        } else {
          this.setGravityY(350); // Adjust the positive gravity as needed
        }
        
            // if (Phaser.Input.Keyboard.JustDown(this.jump_key) && !this.is_jumping && this.jump_num < 1) {
            //     this.jump_add_sfx.play();
            //     this.is_jumping = true;
            //     this.jump_num++;
            //     this.player.setVelocityY(-1500);
            //     this.clock = this.time.delayedCall(200, () => {
            //         this.player.setVelocityY(225);
            //         this.clock = this.time.delayedCall(200, () => {
            //             this.is_jumping = false;
            //         }, null, this);
            //     }, null, this);
            // }

            
            // if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            //     this.x++;
            // }

            
            // if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //     this.x--;
            // }
        }
>>>>>>> 1d3732a74c257f87a0c3b79364e5466f4e5ea62b
}