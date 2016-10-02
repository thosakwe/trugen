import Animations from './animations';
import Character from "./character";
import {Game, Key, Keyboard, Sprite, Physics, Point, Signal} from 'phaser-shim';

abstract class Player extends Character {
    protected body:Physics.Arcade.Body;
    protected isNotPunching = true;
    protected game: Game;
    protected punchWait = 200;
    speed = new Point(10, 10);
    keyboard: Keyboard;
    sprite: Sprite;

    connect(sprite: Sprite, game: Game): void {
        this.game = game;
        this.sprite = sprite;
        game.physics.enable(sprite);
        const body = this.body = <Physics.Arcade.Body>sprite.body;
        this.keyboard = game.input.keyboard;

        body.collideWorldBounds = true;
        body['onWorldBounds'] = new Signal();
        body['onWorldBounds'].add(() => {
            this.collideWorldBounds();
        });
    }

    collideWorldBounds(): void {
        this.sprite.play(Animations.COLLIDE_WORLD_BOUNDS, 1, true);
    }

    idle(): void {
        this.sprite.play(Animations.IDLE, 5, true);
    }

    jump(): void {
    }

    moveDown(): void {
        this.sprite.play(Animations.LAND);
        this.sprite.y += this.speed.y;
    }

    moveLeft(): void {
        this.sprite.scale.x = 1;
        this.sprite.x -= this.speed.x;
    }

    moveRight(): void {
        this.sprite.scale.x = -1;
        this.sprite.x += this.speed.x;
    }

    moveUp(): void {
        this.sprite.play(Animations.FLY);
        this.sprite.y -= this.speed.y;
    }


    punch(): void {
        this.sprite.play(Animations.PUNCH);

        setTimeout(() => {
            this.isNotPunching = true;
        }, this.punchWait);
    }

    spawn(x: number, y: number, game: Game): Sprite {
        const sprite = this.spawnSprite(x, y, game);
        this.connect(sprite, game);
        return sprite;
    }

    abstract spawnSprite(x: number, y: number, game: Game): Sprite;

    update(sprite: Sprite, game: Game): void {
        let shouldIdle = true;

        if (this.keyboard.isDown(Keyboard.SPACEBAR)) {
            shouldIdle = false;
            this.jump();
        }

        if (this.keyboard.isDown(Keyboard.DOWN) || this.keyboard.isDown(Keyboard.S)) {
            shouldIdle = false;
            this.moveDown();
        } else if (this.keyboard.isDown(Keyboard.UP) || this.keyboard.isDown(Keyboard.W)) {
            shouldIdle = false;
            this.moveUp();
        }

        if (this.keyboard.isDown(Keyboard.LEFT) || this.keyboard.isDown(Keyboard.A)) {
            shouldIdle = false;
            this.moveLeft();
        } else if (this.keyboard.isDown(Keyboard.RIGHT) || this.keyboard.isDown(Keyboard.D)) {
            shouldIdle = false;
            this.moveRight();
        }

        if (this.keyboard.isDown(Keyboard.X) && this.isNotPunching) {
            shouldIdle = false;
            this.isNotPunching = false;
            this.punch();
        }

        if (!this.isNotPunching) {
            this.sprite.play(Animations.AFTER_PUNCH);
        } else if (shouldIdle)
            this.idle();
    }
}

export default Player;