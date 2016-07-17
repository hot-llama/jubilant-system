class SpeechBubble extends Phaser.Sprite {

  constructor(game, x, y, width, text) {
    super(game, x, y)

    // Phaser.Sprite.call(this, game, x, y);

    // Some sensible minimum defaults
    this.bubbleWidth = width || 27;
    this.height = 18;

    // Set up our text and run our custom wrapping routine on it
    this.bitmapText = game.make.bitmapText(x + 12, y + 4, '8bitoperator', text, 22);
    this.wrapBitmapText(this.bitmapText, this.bubbleWidth);

    // Calculate the width and height needed for the edges
    var bounds = this.bitmapText.getLocalBounds();
    if (bounds.width + 18 > this.bubbleWidth) {
      this.bubbleWidth = bounds.width + 18;
    }
    if (bounds.height + 14 > this.height) {
      this.height = bounds.height + 14;
    }

    // Create all of our corners and edges
    this.borders = [
      game.make.tileSprite(x + 9, y + 9, this.bubbleWidth - 9, this.height - 9, 'bubble-border', 4),
      game.make.image(x, y, 'bubble-border', 0),
      game.make.image(x + this.bubbleWidth, y, 'bubble-border', 2),
      game.make.image(x + this.bubbleWidth, y + this.height, 'bubble-border', 8),
      game.make.image(x, y + this.height, 'bubble-border', 6),
      game.make.tileSprite(x + 9, y, this.bubbleWidth - 9, 9, 'bubble-border', 1),
      game.make.tileSprite(x + 9, y + this.height, this.bubbleWidth - 9, 9, 'bubble-border', 7),
      game.make.tileSprite(x, y + 9, 9, this.height - 9, 'bubble-border', 3),
      game.make.tileSprite(x + this.bubbleWidth, y + 9, 9, this.height - 9, 'bubble-border', 5)
    ];

    // Add all of the above to this sprite
    for (var b = 0, len = this.borders.length; b < len; b++) {
      this.addChild(this.borders[b]);
    }

    // Add the tail
    this.tail = this.addChild(game.make.image(x + 18, y + 3 + this.height, 'bubble-tail'));

    // Add our text last so it's on top
    this.addChild(this.bitmapText);
    this.bitmapText.tint = 0x111111;

    // Offset the position to be centered on the end of the tail
    this.pivot.set(x + 25, y + this.height + 24);
  }

  // createBubble(game, x, y, width, text) {
  //
  // };

  wrapBitmapText(bitmapText, maxWidth) {
    var words = bitmapText.text.split(' '), output = "", test = "";

    for (var w = 0, len = words.length; w < len; w++) {
      test += words[w] + " ";
      bitmapText.text = test;
      bitmapText.updateText();
      if (bitmapText.textWidth > maxWidth) {
        output += "\n" + words[w] + " ";
      }
      else {
        output += words[w] + " ";
      }
      test = output;
    }

    output = output.replace(/(\s)$/gm, ""); // remove trailing spaces
    bitmapText.text = output;
    bitmapText.updateText();
  }
}

export default SpeechBubble;