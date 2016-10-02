import Assets from '../../assets';
import States from '../names';
import {State, Text} from 'phaser-shim';

export default class Title extends State {
    subtitle: Text;
    title: Text;

    preload(): void {
        this.game.load.audio(Assets.INTRO, 'assets/sounds/intro.mp3');
    }

    create(): void {
        this.title = this.game.add.text(
            this.game.width / 2,
            (this.game.height / 2) - 32,
            window.document.title = 'TRUGEN', {
                boundsAlignH: 'center',
                boundsAlignV: 'middle',
                fill: '#000',
                font: '64px Lato'
            });
        this.title.anchor.setTo(0.5);

        this.subtitle = this.game.add.text(
            this.game.width / 2,
            (this.game.height / 2) + 32,
            'Click or tap to play', {
                boundsAlignH: 'center',
                boundsAlignV: 'middle',
                fill: '#000',
                font: '32px Lato'
            });
        this.subtitle.anchor.set(0.5);

        const intro = this.game.add.audio(Assets.INTRO);
        intro.onDecoded.add(() => {
            intro.fadeIn(4000);
        });

        this.game.input.onDown.add(() => {
            this.game.state.start(States.BATTLE);
        });
    }
}