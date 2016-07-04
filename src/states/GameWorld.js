class GameWorld extends Phaser.State {

  create() {
    this.add.sprite(0, 0, 'background');
    this.add.sprite(200, 200, 'monkey');

    this.add.text(16, 16, "State Example: init", { font: "16px Arial", fill: "#ffffff" });
  }
}

export default GameWorld;