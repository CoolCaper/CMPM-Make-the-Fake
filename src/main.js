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
    scene: [ Level1 ]
}

let keyJUMP, keyLEFT, keyRIGHT;
const game = new Phaser.Game(config)