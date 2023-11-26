
//  scooby jump
/*

        if (Phaser.Input.Keyboard.JustDown(this.jump_key) && !this.is_jumping && this.jump_num < 1) {
            this.jump_add_sfx.play();
            this.is_jumping = true;
            this.jump_num++;
            this.player.setVelocityY(-1500);
            this.clock = this.time.delayedCall(200, () => {
                this.player.setVelocityY(225);
                this.clock = this.time.delayedCall(200, () => {
                    this.is_jumping = false;
                }, null, this);
            }, null, this);
        }

        
        if (Phaser.Input.Keyboard.JustDown(this.key_RIGHT)) {
            this.x++;
        }

        
        if (Phaser.Input.Keyboard.JustDown(this.key_LEFT)) {
            this.x--;
        }
*/