class GameState extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('background', '../assets/dirt-tile.png');
    this.load.spritesheet('monkey', '../assets/n11.png', 30, 30);
  }

	create() {

    this.state.start('GameWorld', true, false);
	}
}

export default GameState;
