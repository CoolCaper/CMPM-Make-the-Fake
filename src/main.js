'use strict'

let config = {
    parent: 'phaser-game',
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
    scene: [ Menu, Level1, Roman, Level3]
}

let keyJUMP, keyLEFT, keyRIGHT;
const game = new Phaser.Game(config)

const NUMS = {
    ONE: Phaser.Input.Keyboard.KeyCodes.ONE,
    TWO: Phaser.Input.Keyboard.KeyCodes.TWO,
    THREE: Phaser.Input.Keyboard.KeyCodes.THREE,
  };
  
