//class from play
class Level1 extends Phaser.Scene {
    constructor (){
        super('playScene')
    }

    preload(){
        this.load.image('background', './assets/moon_background.png');
        this.load.image('platform', './assets/moon_platform.png');
        this.load.image('scooby', './assets/Scooby.png')
    }

    create(){
        //image set up
        this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.scooby = this.physics.add.sprite(game.config.width / 2, game.config.height / 2, 'scooby')
        this.add.image(game.config.width / 2, game.config.height, 'platform')
        //physics set up
        this.physics.world.gravity.y = 150;       
        this.scooby.body.setCollideWorldBounds(true)
        this.scooby.body.allowGravity = true;
        //variable set up         
        this.is_jumping = false;        
        this.jump_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.left_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.jump_key) && !this.is_jumping) {
            this.jump_add_sfx.play();
            this.is_jumping = true;
            this.jump_num++;
            this.player.setVelocityY(-1500);
            this.clock = this.time.delayedCall(200, () => {
                this.player.setVelocityY(225);
                this.clock = this.time.delayedCall(200, () => {
                    this.is_jumping = false;
                }, null, this);
            }, null, this);
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.left_key && !this.is_jumping) {
            this.scooby.x++;
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.right_key) && !this.is_jumping) {
            this.scooby.x--;
        }
    }
}
//preload 
// - Scooby
// - background
// -platforms
// -enemies
// sbacks
// create

// - should enemies get a separate class? 
// - background
// -platforms
// one way code to that players can jump on the platforms from beneath and not fall down
    //this.oneWay.body.checkCollision.down = false;
    //this.physics.add.collider(this.ball, this.oneWay)
// -enemies
// sbacks

//move
//jump
//SS collect

//update
// enemy movement