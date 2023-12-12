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
        //enemy / ammo collision done separately so that not all enemies disappear
        //Ammo & Enemy1 Handling
        this.physics.add.collider(this.Ammo, this.enemy1, (Ammo, enemy1) => {
            this.enemy1.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy1.x = 9999
            this.Ammo.x = 9999
        })
        this.physics.add.collider(this.Ammo2, this.enemy1, (Ammo2, enemy1) => {
            this.enemy2.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy2.x = 9999
            this.Ammo2.x = 9999
        })
        this.physics.add.collider(this.Ammo3, this.enemy1, (Ammo3, enemy1) => {
            this.enemy1.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy1.x = 9999
            this.Ammo.x = 9999
        })
        
        //Ammo & Enemy2 Handling
        this.physics.add.collider(this.Ammo, this.enemy2, (Ammo, enemy2) => {
            this.enemy2.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy2.x = 9999
            this.Ammo.x = 9999
        })
        this.physics.add.collider(this.Ammo2, this.enemy2, (Ammo2, enemy2) => {
            this.enemy2.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy2.x = 9999
            this.Ammo2.x = 9999
        })
        this.physics.add.collider(this.Ammo3, this.enemy2, (Ammo3, enemy2) => {
            this.enemy2.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy2.x = 9999
            this.Ammo.x = 9999
        })

        //Ammo & Enemy3 Handling
        this.physics.add.collider(this.Ammo, this.enemy3, (Ammo, enemy3) => {
            this.enemy3.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy3.x = 9999
            this.Ammo.x = 9999
        })
        this.physics.add.collider(this.Ammo2, this.enemy3, (Ammo2, enemy3) => {
            this.enemy3.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy3.x = 9999
            this.Ammo2.x = 9999
        })
        this.physics.add.collider(this.Ammo3, this.enemy3, (Ammo3, enemy3) => {
            this.enemy3.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy3.x = 9999
            this.Ammo.x = 9999
        })

        //Ammo & Enemy4 Handling
        this.physics.add.collider(this.Ammo, this.enemy4, (Ammo, enemy4) => {
            this.enemy4.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy4.x = 9999
            this.Ammo.x = 9999
        })
        this.physics.add.collider(this.Ammo2, this.enemy4, (Ammo2, enemy4) => {
            this.enemy4.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy4.x = 9999
            this.Ammo2.x = 9999
        })
        this.physics.add.collider(this.Ammo3, this.enemy4, (Ammo3, enemy4) => {
            this.enemy4.body.enable = false
            //this.Ammo.body.enable = false
            this.enemy4.x = 9999
            this.Ammo.x = 9999
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
        this.LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //shooting bools
        this.ammo_true = false;
        this.ammo1_left = false;
        this.ammo2_left = false;
        this.ammo3_left = false;
        this.scooby.left = false;

        
    }

    update(){
        //switch levels for Debug purposes 
        console.log(this.scooby.left)
        if (Phaser.Input.Keyboard.JustDown(this.LEFT)) {
            console.log("Turn")
            this.scooby.left = true
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.RIGHT)) {
            console.log("Turn")
            this.scooby.left = false
        }
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
            console.log(this.scooby.left)
            if (this.ammo_count < 2) {
            if (this.scooby.left) {
                this.ammo1_left = true;
            }
            this.ammo1 = true
            this.Ammo.x = this.scooby.x            
            this.Ammo.y = this.scooby.y
            this.ammo_count++
            } else if (this.ammo_count < 3) {                
            this.ammo2 = true
            if (this.scooby.left) {
                this.ammo2_left = true;
            }
            this.Ammo2.x = this.scooby.x
            this.Ammo2.y = this.scooby.y
            this.ammo_count++
            console.log("ammo check")
            console.log(this.ammo2_left)
            } else if (this.ammo_count < 4) {               
            this.ammo3 = true
            if (this.scooby.left) {
                this.ammo3_left = true;
            }
            
            console.log("ammo check")
            console.log(this.ammo3_left)
            this.Ammo3.x = this.scooby.x
            this.Ammo3.y = this.scooby.y
            this.ammo_count++
            }
            
        }
        //make ammo move when shot
            if (this.ammo1) {
                if (this.ammo1_left) {
                    this.Ammo.x -= 4
                } else {
                        this.Ammo.x += 4
                }
            }
            if (this.ammo2) {
                if (this.ammo2_left) {
                    this.Ammo2.x -= 4
                } else {
                        this.Ammo2.x += 4
                }
            }
            if (this.ammo3) {
                if (this.ammo3_left) {
                    this.Ammo3.x -= 4
                } else {
                        this.Ammo3.x += 4
                }
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