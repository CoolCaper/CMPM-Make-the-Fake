class GameOver extends Phaser.Scene{
    constructor (){
        super('gameOver')
    }
    preload(){
        // load audio
      this.load.audio('sfx_select', './assets/select.mp3');
      this.load.image('vhs', './assets/vhs_background.png');
      this.load.image('logo', './assets/Scooby_logo.png');
      this.scoob_tween = this.load.image('scooby', './assets/Scooby')
    }
    create(){
        let menuConfig = {
            fontFamily: 'Helvetica',
            fontSize: '20px',
            color: '#1C1C1C',
            align: 'left',
            padding:{
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0 
        }
        
        this.background = this.add.image(game.config.width/2,game.config.height/2, 'vhs');
        this.logo = this.add.image(game.config.width/2,game.config.height/2, 'logo');
        //show menu text 
        this.add.text(game.config.width/2,game.config.height/1.5 + game.config.height/20,'Press <- or -> to restart',menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '40px'
        this.add.text(game.config.width/2,game.config.height/1.6,'Game Over',menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT) ||Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          this.sound.play('sfx_select');
          this.scene.start('Level1');    
        }
        
      }

}