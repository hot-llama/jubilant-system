import {width, height} from "../constants";

class GameWorld extends Phaser.State {

  constructor() {

    super();

    let monkey = null;
    let wizard = null;
    let cursors = null;

  }

  /**
   *
   * @param actor - string
   * @param postionX - number
   * @param positionY - number
   */
  createActor(actor, postionX, positionY) {
    let actorName = `${actor}`;
    let newActor = this.game.add.sprite(postionX, positionY, actorName);

    //Instantiate Actor - Monkey
    this.physics.arcade.enable(newActor);
    newActor.body.collideWorldBounds = true;
    // Animations
    newActor.animations.add('left', [3, 4, 5], 10, true);
    newActor.animations.add('right', [6, 7, 8], 10, true);
    newActor.animations.add('down', [0, 1, 2], 10, true);
    newActor.animations.add('up', [9, 10, 11], 10, true);

    return newActor;
  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.add.tileSprite(0, 0, width, height, 'background');

    this.wizard = this.createActor('wizard', 300, 200);
    //Instantiate Actor - Monkey
    this.monkey = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'monkey');
    this.physics.arcade.enable(this.monkey);
    this.monkey.body.collideWorldBounds = true;
    // Animations
    this.monkey.animations.add('left', [3, 4, 5], 10, true);
    this.monkey.animations.add('right', [6, 7, 8], 10, true);
    this.monkey.animations.add('down', [0, 1, 2], 10, true);
    this.monkey.animations.add('up', [9, 10, 11], 10, true);

    this.add.text(16, 16, "State Example: init", {font:"16px Arial", fill:"#ffffff"});
    console.log(this.monkey);
  }

  update() {
    this.monkey.body.velocity.x = 0;
    this.monkey.body.velocity.y = 0;
    this.wizard.body.velocity.x = 0;
    this.wizard.body.velocity.y = 0;

    if (this.cursors.left.isDown) {
      // this.monkey.body.velocity.x = -150;
      this.wizard.body.velocity.x = -150;
      // this.monkey.animations.play('left');
      this.wizard.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
      this.wizard.body.velocity.x = 150;
      // this.monkey.animations.play('right');
      this.wizard.animations.play('right');
    }
    else if (this.cursors.up.isDown) {
      this.wizard.body.velocity.y = -150;
      // this.monkey.animations.play('up');
      this.wizard.animations.play('up');

    }
    else if (this.cursors.down.isDown) {
      this.wizard.body.velocity.y = 150;
      // this.monkey.animations.play('down');
      this.wizard.animations.play('down');
    }
    else {
      // this.monkey.animations.stop();
      this.wizard.animations.stop();
      // this.monkey.frame = 1;
      this.wizard.frame = 1;
    }
  }

}

export default GameWorld;