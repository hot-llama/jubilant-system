import { width, height } from "../constants";

class GameWorld extends Phaser.State {
  preload() {
    // Setup
    this.add.tileSprite(0, 0, width, height, 'background');
    this.cursors = this.game.input.keyboard.createCursorKeys();

    // Actors
    this.wizard = this.createActor('wizard', 300, 200);
    this.monkey = this.createActor('monkey', this.game.world.centerX, this.game.world.centerY);
  }

  update() {
    this.wizard.body.velocity.x = 0;
    this.wizard.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      this.wizard.body.velocity.x = -150;
      this.wizard.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
      this.wizard.body.velocity.x = 150;
      this.wizard.animations.play('right');
    }
    else if (this.cursors.up.isDown) {
      this.wizard.body.velocity.y = -150;
      this.wizard.animations.play('up');
    }
    else if (this.cursors.down.isDown) {
      this.wizard.body.velocity.y = 150;
      this.wizard.animations.play('down');
    }
    else {
      this.wizard.animations.stop();
      this.wizard.frame = 1;
    }
  }

  render() {
    this.game.debug.spriteInfo(this.wizard, 32, 32);
  }

  /**
   * Creates a new Actor for the world.
   * @param actor - string
   * @param postionX - number
   * @param positionY - number
   * @returns new Actor Object
   */
  createActor(actor, postionX, positionY) {
    const newActor = this.game.add.sprite(postionX, positionY, `${actor}`);

    //Instantiate Actor
    this.physics.arcade.enable(newActor);
    newActor.body.collideWorldBounds = true;

    // Add walk animations to Actor
    newActor.animations.add('left', [3, 4, 5], 10, true);
    newActor.animations.add('right', [6, 7, 8], 10, true);
    newActor.animations.add('down', [0, 1, 2], 10, true);
    newActor.animations.add('up', [9, 10, 11], 10, true);

    return newActor;
  }
}

export default GameWorld;