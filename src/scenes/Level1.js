//class from play
class Level1 extends Phaser.Scene {
    constructor (){
        super('Level1')
    }

    preload(){
        this.load.image('background', './assets/moon_background.png');
        this.load.image('platform', './assets/moon_platform.png');
        this.load.image('Scooby', './assets/Scooby.png')
    }

    create(){
        //image set up
        this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.scooby = new Scooby(this, game.config.width / 2, game.config.height);
        //physics set up
        this.physics.world.gravity.y = 130;       

        this.platforms = this.physics.add.staticGroup();
        this.physics.add.collider(this.scooby, this.platforms);

        this.createPlatform(game.config.width / 3, game.config.height / 1.6, 1.5);
        this.createPlatform(game.config.width / 1.4, game.config.height / 1.6, 1.5);

        this.createPlatform(game.config.width / 6, game.config.height / 1.2, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 1.2, 1);

        this.createPlatform(game.config.width / 6, game.config.height / 3.6, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 3.6, 1);

        this.createPlatform(game.config.width / 2, game.config.height / 4.8, 1);

        NUMS.ONE = this.input.keyboard.addKey(NUMS.ONE);
        NUMS.TWO = this.input.keyboard.addKey(NUMS.TWO);
    }

    update(){
        //switch levels for Debug purposes 
        if (Phaser.Input.Keyboard.JustDown(NUMS.ONE)) {
            this.sound.play('sfx_select');
            this.scene.start('Level1');    
        }else if(Phaser.Input.Keyboard.JustDown(NUMS.TWO)){
            this.sound.play('sfx_select');
            this.scene.start('Roman'); 
        }
        this.scooby.update()
    }

    createPlatform(x, y, scale) {
        const platform = this.platforms.create(x, y, 'platform');
        platform.setScale(scale);
        platform.setOrigin(0.5, 0.5);
    
        // Enable physics for the platform
        this.physics.world.enable(platform);
        platform.setImmovable(true);
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