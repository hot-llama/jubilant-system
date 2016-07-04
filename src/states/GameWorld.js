import {width, height} from '../constants';

class GameWorld extends Phaser.State {

  create() {
    this.add.tileSprite(0, 0, width, height, 'background');
    var monkey = this.add.sprite(20, 200, 'monkey')
    
    this.physics.arcade.enable(monkey);

    this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });
  }
}

export default GameWorld;