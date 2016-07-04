import {width, height} from '../constants';

class GameWorld extends Phaser.State {

  constructor() {

    super();

    //this.cursors = super.input.keyboard.createCursorKeys();
    //let monkey =

  }

  create() {

    this.add.tileSprite(0, 0, width, height, 'background');

    //Instantiate Actor - Monkey
    var monkey = this.game.add.sprite(20, 200, 'monkey');
    this.physics.arcade.enable(monkey);
    monkey.body.collideWorldBounds = true;


    this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });
  }

  update() {
    // if(this.cursors.left.isDown) {
    //   this.monkey.body.velocity.x = -150;
    // }
  }
}

export default GameWorld;