import Load from 'states/Load';
import GameWorld from 'states/GameWorld';
import { width, height } from './constants';

class Game extends Phaser.Game {
	constructor(width, height) {
		super(width, height, Phaser.AUTO, 'content', null);

		this.state.add('Load', Load, false);
    this.state.add('GameWorld', GameWorld, false);
		this.state.start('Load');
  }
}

new Game(width, height);
