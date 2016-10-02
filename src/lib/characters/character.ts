import {Game, Sprite} from 'phaser-shim';

/**
 * Represents an in-game character.
 */
abstract class Character {
    /**
     * Pre-loads the character's assets.
     * @param game The game to load assets into.
     */
    abstract preload(game:Game):void;

    /**
     * Spawns a sprite representing this character.
     * @param x The horizontal coordinate at which to draw this sprite.
     * @param y The vertical coordinate at which to draw this sprite.
     * @param game The game to draw the sprite into.
     */
    abstract spawn(x:number, y:number, game:Game):Sprite;
}

export default Character;