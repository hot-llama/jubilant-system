import * as _ from 'lodash';


class Game extends Phaser.Game {

    options: Object;
    width: number;
    height: number;

    constructor(width, height) {

        const options = {
            width,
            height
        };

        super(options);
    }
}

const game = new Game(800, 600);