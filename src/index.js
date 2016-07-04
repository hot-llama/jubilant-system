import GameState from 'states/GameState';
import StateB from 'states/StateB';


const width = window.innerWidth;
const height = window.innerHeight;

class Game extends Phaser.Game {
	constructor(width, height) {
    super(width, height, Phaser.AUTO, 'content', null);

		this.state.add('GameState', GameState, false);
    this.state.add('StateB', StateB, false);
		this.state.start('GameState');
	}
}

new Game(width, height);
