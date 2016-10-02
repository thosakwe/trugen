import {AUTO, Game, Physics} from 'phaser-shim';
import {BattleState, LoadingState, States, TitleState} from './states';

export default class MyGame {
    game: Game;

    constructor() {
        this.game = new Game(
            window.innerWidth * window.devicePixelRatio,
            window.innerHeight * window.devicePixelRatio,
            AUTO,
            'game');

        this.game.state.add(States.LOADING, LoadingState);
        this.game.state.add(States.TITLE, TitleState);
        this.game.state.add(States.BATTLE, BattleState);

        this.game.state.start(States.LOADING);
    }
}