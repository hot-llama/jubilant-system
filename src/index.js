import GameState from 'states/GameState';
import GameWorld from 'states/GameWorld';


const width = window.innerWidth;
const height = window.innerHeight;

class Game extends Phaser.Game {
	constructor(width, height) {
		super(width, height, Phaser.AUTO, 'content', null);

		this.state.add('GameState', GameState, false);
    this.state.add('GameWorld', GameWorld, false);
		this.state.start('GameState');
	}
}

new Game(width, height);
