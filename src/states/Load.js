class GameState extends Phaser.State {
  preload() {
    this.load.image('background', '../assets/environment/tile-dirt.png');
    this.load.spritesheet('monkey', '../assets/characters/monkey.png', 30, 30);
    this.load.spritesheet('wizard', '../assets/characters/wizard.png', 30, 30);
  }

	create() {
    this.state.start('GameWorld', true, false);
	}
}

export default GameState;
