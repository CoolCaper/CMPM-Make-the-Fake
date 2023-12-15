//prgrammed by Shauna Mahoney, and Guy Haiby

//the components we used were 
// (animation) (game win screen)
//tweens (game over)
// timer ("READY? GO!" in scene 1)
// physics (scooby, enemies, platforms ,etc.)
// text objects (instructions, "READY? GO!")
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
this.total_time = 0;
let integer = 0;
let lev1Time = 0
let lev2Time = 0
let lev3Time = 0
function increment() {
    integer++;
  }
const NUMS = {
    ONE: Phaser.Input.Keyboard.KeyCodes.ONE,
    TWO: Phaser.Input.Keyboard.KeyCodes.TWO,
    THREE: Phaser.Input.Keyboard.KeyCodes.THREE,
  };
  
