import Matter from 'matter-js';
import BaseLevel from './BaseLevel';

class Level9 extends BaseLevel {
    game = {
        world: {
            gravity: {
                x: 0,
                y: 0,
            },
        },
        goals: [
            {
                _overRule: false,
                position: {
                    x: this.defaultGame.settings.width / 2,
                    y: 1000,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 - 100,
                    y: 900,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 + 100,
                    y: 900,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 - 150,
                    y: 800,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 + 150,
                    y: 800,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 + 150,
                    y: 600,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 - 150,
                    y: 600,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },

            {
                position: {
                    x: this.defaultGame.settings.width / 2 + 200,
                    y: 400,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 - 200,
                    y: 400,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },

            {
                position: {
                    x: this.defaultGame.settings.width / 2 + 300,
                    y: 300,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                position: {
                    x: this.defaultGame.settings.width / 2 - 300,
                    y: 300,
                },
                options: {
                    restitution: 1,
                    friction: 0,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
        ],
    };

    myObjects = {};

    start() {
        this.myObjects.slidingWall = Matter.Bodies.rectangle(this.game.settings.width / 2, this.game.settings.height / 2 + 140, 600, 20, {
            isStatic: true,
            restitution: 1,
            render: {
                visible: true,
                fillStyle: '#ffffff',
            },
        });
        this.myObjects.slidingWall._type = 'wall';

        this.myObjects.slidingWall2 = Matter.Bodies.rectangle(
            this.game.settings.width / 2 - 300,
            this.game.settings.height / 2 - 150,
            20,
            600,
            {
                isStatic: true,
                restitution: 1,
                render: {
                    visible: true,
                    fillStyle: '#ffffff',
                },
            },
        );
        this.myObjects.slidingWall2._type = 'wall';

        this.myObjects.slidingWall3 = Matter.Bodies.rectangle(
            this.game.settings.width / 2 + 300,
            this.game.settings.height / 2 - 150,
            20,
            600,
            {
                isStatic: true,
                restitution: 1,
                render: {
                    visible: true,
                    fillStyle: '#ffffff',
                },
            },
        );
        this.myObjects.slidingWall3._type = 'wall';

        this.myObjects.slidingWall4 = Matter.Bodies.rectangle(this.game.settings.width / 2, this.game.settings.height / 2 - 500, 20, 800, {
            isStatic: true,
            restitution: 1,
            render: {
                visible: true,
                fillStyle: '#ffffff',
            },
        });
        this.myObjects.slidingWall4._type = 'wall';

        Matter.World.add(this.game.engine.world, [
            this.myObjects.slidingWall,
            this.myObjects.slidingWall2,
            this.myObjects.slidingWall3,
            this.myObjects.slidingWall4,
        ]);
    }

    beforeUpdate() {
        // make bodyA move up and down
        // body is static so must manually update velocity for friction to work
        // Matter.Body.applyForce(this.myObjects.movingWall);
        // var py = 1300 + 200 * Math.sin(this.game.engine.timing.timestamp * 0.0025);
        // Matter.Body.setVelocity(this.myObjects.movingWall, { x: 0, y: py - this.myObjects.movingWall.position.y });
        // Matter.Body.setPosition(this.myObjects.movingWall, { x: (1080-150), y: py });
    }
}
export default Level9;
