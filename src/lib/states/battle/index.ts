import {Sprite, State} from 'phaser-shim';
import Goku from "../../characters/goku/index";

export default class Battle extends State {
    _goku = new Goku();

    gokuSprite: Sprite;

    preload(): void {
        this._goku.preload(this.game);
    }


    create(): void {
        this.gokuSprite = this._goku.spawn(this.game.width / 2, this.game.height / 2, this.game);
    }


    update(): void {
        this._goku.update(this.gokuSprite, this.game);
    }
}