import {width, height} from '../constants';

class GameWorld extends Phaser.State {

  constructor() {

    super();

    let monkey = null;
    let cursors = null;

  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.add.tileSprite(0, 0, width, height, 'background');

    //Instantiate Actor - Monkey
    this.monkey = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'monkey');
    this.physics.arcade.enable(this.monkey);
    this.monkey.body.collideWorldBounds = true;
    // Animations
    this.monkey.animations.add('left', [3, 4, 5], 10, true);
    this.monkey.animations.add('right', [6, 7, 8], 10, true);
    this.monkey.animations.add('down', [0, 1, 2], 10, true);
    this.monkey.animations.add('up', [9, 10, 11], 10, true);

    this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });
  }

  update() {
    this.monkey.body.velocity.x = 0;
    this.monkey.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      this.monkey.body.velocity.x = -150;
      this.monkey.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
      this.monkey.body.velocity.x = 150;
      this.monkey.animations.play('right');
    }
    else if (this.cursors.up.isDown) {
      this.monkey.body.velocity.y = -150;
      this.monkey.animations.play('up');

    }
    else if (this.cursors.down.isDown) {
      this.monkey.body.velocity.y = 150;
      this.monkey.animations.play('down');
    }
    else {
      this.monkey.animations.stop();
      // this.monkey.frame(0);
    }
  }

}

export default GameWorld;