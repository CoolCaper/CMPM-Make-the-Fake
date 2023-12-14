//prgrammed by Shauna Mahoney, and Guy Haiby
'use strict'

let config = {
    parent: 'gameView',
    type: Phaser.AUTO,
    pixelArt: true,    
    physics: {
        default: 'arcade',
        //arcade: {
        //    debug: true
        //}
    },
    width: 800,
    height: 600,
    scale: { //added framing
        mode: Phaser.Scale.FIT
    },
    scene: [ Menu, Level1, Roman, Level3, GameOver, Win]
}

const game = new Phaser.Game(config)

//define keys for movement and switching levels 
let keyJUMP, keyLEFT, keyRIGHT;
const NUMS = {
    ONE: Phaser.Input.Keyboard.KeyCodes.ONE,
    TWO: Phaser.Input.Keyboard.KeyCodes.TWO,
    THREE: Phaser.Input.Keyboard.KeyCodes.THREE,
  };
  
