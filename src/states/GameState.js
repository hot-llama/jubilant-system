class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/wave.jpg');
    this.load.image('asuna', '../assets/asuna.png');
  }

	create() {

    this.state.start('StateB', true, false);
	}
}

export default GameState;
