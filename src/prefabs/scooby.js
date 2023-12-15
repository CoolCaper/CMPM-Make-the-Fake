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
        this.left = false;

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
            this.setVelocityY(-500); // Adjust the jump velocity as needed
        }
    
        // Apply custom gravity to achieve a more realistic jump arc
        if (this.body.velocity.y < 0) {
          this.setGravityY(600); // Adjust the negative gravity as needed
        } else {
          this.setGravityY(500); // Adjust the positive gravity as needed
        }
        
        }
}