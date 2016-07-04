class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/wave.jpg');
  }

	create() {
    this.state.start('StateB', true, false);
	}
}

export default GameState;
