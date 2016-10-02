import Assets from './assets';
import Character from "../character";
import {Game, Sprite} from 'phaser-shim';

export default class Goku extends Character {
    preload(game:Game) {
        game.load.spritesheet(Assets.IDLE, 'assets/goku/idle.png', 107, 165);
    }

    spawn(x, y, game:Game):Sprite {
        const sprite = game.add.sprite(x, y, Assets.IDLE);

        sprite.anchor.setTo(0.5, 0.5);
        sprite.animations.add('idle');
        sprite.play('idle', 5, true);

        return sprite;
    }
}