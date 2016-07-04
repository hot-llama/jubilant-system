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
    this.monkey = this.game.add.sprite(20, 200, 'monkey');
    this.physics.arcade.enable(this.monkey);
    this.monkey.body.collideWorldBounds = true;

    this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });
  }

  update() {
    this.monkey.body.velocity.x = 0;
    this.monkey.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      this.monkey.body.velocity.x = -150;
    }
    else if (this.cursors.right.isDown) {
      this.monkey.body.velocity.x = 150;
    }
    else if (this.cursors.up.isDown) {
      this.monkey.body.velocity.y = -150;
    }
    else if (this.cursors.down.isDown) {
      this.monkey.body.velocity.y = 150;
    }
    else {
      return;
    }
  }

}

export default GameWorld;