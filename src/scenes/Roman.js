class Roman extends Phaser.Scene{
    constructor (){
        super('Roman')
    }

    preload(){
        this.load.image('colosseum', './assets/Roman_background.png');
        this.load.image('roman_platform', './assets/RP.png');        
        this.load.image('Scooby', './assets/Scooby.png')
        this.load.image('ammo', './assets/shoot.png')
        this.load.image('ss', './assets/scooby snax.png')
        this.load.image('skeleton', './assets/skeleton.png')
        this.load.image('lion', './assets/lion.png')
    }

    create(){
        this.add.image(game.config.width/2, game.config.height/2, 'colosseum');
        this.Ammo = this.physics.add.sprite(25, 50, 'ammo').body.setAllowGravity(false)
        this.Ammo2 = this.physics.add.sprite(50, 50, 'ammo').body.setAllowGravity(false)
        this.Ammo3 = this.physics.add.sprite(75, 50, 'ammo').body.setAllowGravity(false)
        this.ss = this.physics.add.sprite(game.config.width / 2, game.config.height / 4.8 - 50, 'ss').body.setAllowGravity(false)
        
        this.enemy1 = new Enemy(this, game.config.width / 3 - 50, game.config.height / 2, 'skeleton')        
        this.enemy2 = new Enemy(this, game.config.width / 6 - 50, game.config.height / 2, 'skeleton')
        this.enemy3 = new Enemy(this, game.config.width / 1.2 - 120, game.config.height / 2, 'skeleton')        
        this.enemy4 = new Enemy(this, game.config.width / 1.1 - 100, game.config.height / 1.5, 'lion')

        this.scooby = new Scooby(this, game.config.width / 2, game.config.height / 2);

        this.platforms = this.physics.add.staticGroup();

        this.createPlatform(game.config.width / 3, game.config.height / 1.6, 1.5);
        this.createPlatform(game.config.width / 1.4, game.config.height / 1.6, 1.5);

        this.createPlatform(game.config.width / 6, game.config.height / 1.2, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 1.2, 1);

        this.createPlatform(game.config.width / 6, game.config.height / 3.6, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 3.6, 1);

        this.createPlatform(game.config.width / 2, game.config.height / 4.8, 1);
        
        //physics set up
        this.physics.world.gravity.y = 180;       
        this.physics.add.collider(this.scooby, this.platforms);


        NUMS.ONE = this.input.keyboard.addKey(NUMS.ONE);
        NUMS.TWO = this.input.keyboard.addKey(NUMS.TWO);
        NUMS.THREE = this.input.keyboard.addKey(NUMS.THREE);

        
        this.instructions = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FACADE',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 150
        }
    }

    update(){
        //switch levels for Debug purposes 
        if (Phaser.Input.Keyboard.JustDown(NUMS.ONE)) {
            this.sound.play('sfx_select');
            this.scene.start('Level1');    
        }else if(Phaser.Input.Keyboard.JustDown(NUMS.TWO)){
            this.sound.play('sfx_select');
            this.scene.start('Roman'); 
        }else if(Phaser.Input.Keyboard.JustDown(NUMS.THREE)){
            this.sound.play('sfx_select');
            this.scene.start('Level3'); 
        }
        this.scooby.update()
    }

    createPlatform(x, y, scale) {
        const platform = this.platforms.create(x, y, 'roman_platform');
        platform.setScale(scale);
        platform.setOrigin(0.5, 0.5);
        this.physics.world.enable(platform);
        platform.setImmovable(true);
      }
}