import { width, height } from "../constants";
import SpeechBubble from "../SpeechBubble";

class GameWorld extends Phaser.State {
  preload() {
    // Setup
    this.add.tileSprite(0, 0, width, height, 'background');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.game.time.advancedTiming = true;
    this.game.stage.smoothed = false;


    // Actors
    this.wizard = this.createActor('wizard', 100, 200);
    this.monkey = this.createActor('monkey', this.world.centerX, this.world.centerY);
  } 

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    var bubble = new SpeechBubble(this.game, 399, 400, 256, "This is some text which will be automagically wrapped. homey chubbs");

    this.game.world.add(bubble);

  }

  update() {
    this.wizard.body.velocity.x = 0;
    this.wizard.body.velocity.y = 0;
    this.moveActor(this.cursors, this.wizard);

    this.physics.arcade.collide(this.wizard, this.monkey, this.collideHandler, null, this);


  }

  render() {
    // this.game.debug.spriteInfo(this.wizard, 32, 32);
  }

  /**
   * Creates a new Actor for the world.
   * @param { string } key - string key to reference actor sprite
   * @param { number } positionX - position to place sprite X axis
   * @param { number } positionY - position to place sprite Y axis
   * @returns { Object }  new Actor Object
   */
  createActor(key, postionX, positionY) {
    const newActor = this.add.sprite(postionX, positionY, `${key}`);

    //Instantiate Actor
    this.physics.enable(newActor);
    newActor.body.collideWorldBounds = true;

    // Add walk animations to Actor
    newActor.animations.add('left', [3, 4, 5], 10, true);
    newActor.animations.add('right', [6, 7, 8], 10, true);
    newActor.animations.add('down', [0, 1, 2], 10, true);
    newActor.animations.add('up', [9, 10, 11], 10, true);

    return newActor;
  }

  /**
   * Prevents players from flying away after a collision.
   * @param { Object } actor - sprite Object  
   * @param { Object } actor2 - sprite Object
   * @returns void
   */
  collideHandler(actor, actor2) {
    console.log("COLLIDE", actor, actor2);
    actor2.body.velocity.x = 0;
    actor2.body.velocity.y = 0;
  }

  /**
   * Prevents players from flying away after a collision.
   * @param { Object } - reference to cursors object
   * @param { Object }  - reference to sprite object
   * @returns 
   */
  moveActor(cursors, actor) {
    if (this.cursors.left.isDown) {
      actor.body.velocity.x = -150;
      actor.animations.play('left');
    }
    else if (this.cursors.right.isDown) {
      actor.body.velocity.x = 150;
      actor.animations.play('right');
    }
    else if (this.cursors.up.isDown) {
      actor.body.velocity.y = -150;
      actor.animations.play('up');
    }
    else if (this.cursors.down.isDown) {
      actor.body.velocity.y = 150;
      actor.animations.play('down');
    }
    else {
      actor.animations.stop();
      actor.frame = 1;
    }
  }


}

export default GameWorld;