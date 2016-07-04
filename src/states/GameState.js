class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/wave.jpg');
    this.load.image('monkey', '../assets/n11.png');
  }

	create() {

    this.state.start('GameWorld', true, false);
	}
}

export default GameState;
