//class from play
class Level1 extends Phaser.Scene {
    constructor (){
        super('playScene')
    }

    preload(){
        this.load.image('background', './assets/moon_background.png');
        this.load.image('platform', './assets/moon_platform.png');
    }

    create(){
        this.add.image(game.config.width, game.config.height, '/assets/moon_background.png');
        //this.platforms = this.physics.add.staticGroup();
        //const platform = this.platforms.create(400, 550, 'platform').setOrigin(0.5, 0.5);
        //this.physics.world.enable(platform);
        //platform.setImmovable(true);
    }

    update(){

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