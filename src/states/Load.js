class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/tile-dirt.png');
    this.load.spritesheet('monkey', '../assets/monkey.png', 30, 30);
    this.load.spritesheet('wizard', '../assets/wizard.png', 30, 30);
  }

	create() {
    this.state.start('GameWorld', true, false);
	}
}

export default GameState;
