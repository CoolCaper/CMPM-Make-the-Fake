class Roman extends Phaser.Scene{
    constructor (){
        super('playScene')
    }

    preload(){
        this.load.image('background', './assets/Roman_background.png');
        this.load.image('platform', '/assets/moon_platform.png');
    }

    create(){
        this.add.image(game.config.width, game.config.height, '/assets/moon_background.png');

        this.platforms = this.physics.add.staticGroup();
        const platform = this.platforms.create(400, 550, 'platform').setOrigin(0.5, 0.5);
        this.physics.world.enable(platform);
        platform.setImmovable(true);
    }

    update(){

    }
}