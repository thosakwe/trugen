import Animations from "../animations";
import Assets from '../../assets';
import {ArrayUtils, Game, Physics, Point, Sprite} from 'phaser-shim';
import Player from "../player";

export default class Goku extends Player {
    preload(game: Game) {
        game.load.spritesheet(Assets.GOKU, 'assets/goku/all.png', 107, 165);
    }

    spawnSprite(x, y, game: Game): Sprite {
        const sprite = game.add.sprite(x, y, Assets.GOKU);

        sprite.anchor.setTo(0.5, 0.5);
        sprite.animations.add(Animations.IDLE, ArrayUtils.numberArray(0, 3));
        sprite.animations.add(Animations.FLY, [4]);
        sprite.animations.add(Animations.LAND, [5]);
        sprite.animations.add(Animations.COLLIDE_WORLD_BOUNDS, [6]);
        sprite.animations.add(Animations.PUNCH, ArrayUtils.numberArray(8, 11));
        sprite.animations.add(Animations.AFTER_PUNCH, [9]);
        sprite.play(Animations.IDLE, 5, true);

        return sprite;
    }
}