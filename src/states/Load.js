class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/dirt-tile.png');
    this.load.spritesheet('monkey', '../assets/n11.png', 30, 30);
    this.load.spritesheet('wizard', '../assets/n8.png', 30, 30);
  }

	create() {
    this.state.start('GameWorld', true, false);
	}
}

export default GameState;
