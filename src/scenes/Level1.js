//class from play
class Level1 extends Phaser.Scene {
    constructor (){
        super('Level1')
    }

    preload(){
        this.load.image('background', './assets/moon_background.png');
        this.load.image('platform', './assets/moon_platform.png');
        this.scoob = this.load.image('Scooby', './assets/Scooby.png')
        this.load.image('test', './assets/moon.png')
        this.load.image('ammo', './assets/shoot.png')
    }

    create() {
        //image set up
        this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.Ammo = this.physics.add.sprite(25, 50, 'ammo').body.setAllowGravity(false)
        this.Ammo2 = this.physics.add.sprite(50, 50, 'ammo').body.setAllowGravity(false)
        this.Ammo3 = this.physics.add.sprite(75, 50, 'ammo').body.setAllowGravity(false)
        this.ammo_count = 1;
        this.ammo1 = false;
        this.ammo2 = false;
        this.ammo3 = false;
        this.scooby = new Scooby(this, game.config.width / 2, game.config.height);
        this.enemy1 = new Enemy(this, game.config.width / 3 - 50, game.config.height / 2, 'test')        
        this.enemy2 = new Enemy(this, game.config.width / 6 - 50, game.config.height / 2, 'test')
        this.enemy3 = new Enemy(this, game.config.width / 1.2 - 120, game.config.height / 2, 'test')        
        this.enemy4 = new Enemy(this, game.config.width / 1.1 - 100, game.config.height / 1.5, 'test')
        //physics set up
        this.physics.world.gravity.y = 130;               
        this.platforms = this.physics.add.staticGroup();
        //if collide with enemies, game over
        this.physics.add.collider(this.scooby, this.enemy1, (scooby, enemy1) => {
            this.scene.start('gameOver')
        })
        
        this.physics.add.collider(this.scooby, this.enemy2, (scooby, enemy2) => {
            this.scene.start('gameOver')
        })

        
        this.physics.add.collider(this.scooby, this.enemy3, (scooby, enemy3) => {
            this.scene.start('gameOver')
        })
        
        this.physics.add.collider(this.scooby, this.enemy4, (scooby, enemy4) => {
            this.scene.start('gameOver')
        })
        //platform set up
        this.physics.add.collider(this.scooby, this.platforms);
        this.physics.add.collider(this.enemy3, this.platforms);        
        this.physics.add.collider(this.enemy4, this.platforms);
        this.physics.add.collider(this.enemy2, this.platforms);        
        this.physics.add.collider(this.enemy1, this.platforms);
        this.createPlatform(game.config.width / 3, game.config.height / 1.6, 1.5);
        this.createPlatform(game.config.width / 1.4, game.config.height / 1.6, 1.5);

        this.createPlatform(game.config.width / 6, game.config.height / 1.2, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 1.2, 1);

        this.createPlatform(game.config.width / 6, game.config.height / 3.6, 1);
        this.createPlatform(game.config.width / 1.2, game.config.height / 3.6, 1);

        this.createPlatform(game.config.width / 2, game.config.height / 4.8, 1);
        //shoot / instructions key        
        this.instructions = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.shoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        //debug keys 
        NUMS.ONE = this.input.keyboard.addKey(NUMS.ONE);
        NUMS.TWO = this.input.keyboard.addKey(NUMS.TWO);        
        NUMS.THREE = this.input.keyboard.addKey(NUMS.THREE);

        //this KO tween
        this.ammo_true = false;
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
        else if(Phaser.Input.Keyboard.JustDown(this.shoot)){
            console.log(this.ammo_count)
            if (this.ammo_count < 2) {
            this.ammo1 = true
            this.Ammo.x = this.scooby.x            
            this.Ammo.y = this.scooby.y
            this.ammo_count++
            } else if (this.ammo_count < 3) {                
            this.ammo2 = true
            this.Ammo2.x = this.scooby.x
            this.Ammo2.y = this.scooby.y
            this.ammo_count++
            } else if (this.ammo_count < 4) {               
            this.ammo3 = true
            this.Ammo3.x = this.scooby.x
            this.Ammo3.y = this.scooby.y
            this.ammo_count++
            }
            
        }
        //make ammo move when shot
            if (this.ammo1) {
                this.Ammo.x++
            }
            if (this.ammo2) {
                this.Ammo2.x++
            }
            if (this.ammo3) {
                this.Ammo3.x++
            }
        this.scooby.update()
        this.enemy1.update()
        this.enemy2.update()
        this.enemy3.update()
        this.enemy4.update()
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