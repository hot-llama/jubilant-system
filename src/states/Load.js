import { width, height } from '../constants'

class GameState extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('background', '../assets/dirt-tile.png');
    this.load.spritesheet('monkey', '../assets/n11.png', 30, 30);
    this.load.spritesheet('wizard', '../assets/n8.png', 30, 30);

    // Setup
    this.add.tileSprite(0, 0, width, height, 'background');
    this.cursors = this.game.input.keyboard.createCursorKeys();

    // Actors
    this.wizard = this.createActor('wizard', 300, 200);
    this.monkey = this.createActor('monkey', this.game.world.centerX, this.game.world.centerY);
  }

	create() {
    this.state.start('GameWorld', true, false);
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

export default GameState;
