import Assets from '../../assets';
import Goku from "../../characters/goku";
import {Sprite, State} from 'phaser-shim';

export default class Title extends State {
    goku = new Goku();
    logo: Sprite;


    preload(): void {
        this.goku.preload(this.game);
    }

    create(): void {
        window.document.title = 'My Game';

        this.logo = this.goku.spawn(this.game.width / 2, this.game.height / 2, this.game);
        // this.game.add.sprite(this.game.width / 2, this.game.height / 2, Assets.LOGO);
        this.logo.anchor.setTo(0.5, 0.5);
        // this.logo.scale.setTo(0.5, 0.5);
    }
}