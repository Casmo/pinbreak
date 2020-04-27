import React from 'react';
import Matter from 'matter-js';
import BaseLevel from './BaseLevel';

class Level7 extends BaseLevel {
    game = {
        world: {
            gravity: {
                x: 0,
                y: 0.5,
            },
        },
        goals: [
            {
                object: null,
                position: {
                    x: 100,
                    y: 100,
                },
                options: {
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
        ],
    };

    start() {
        var slidingWall = Matter.Bodies.rectangle(380, 400, 800, 20, {
            isStatic: true,
            angle: 0.3,
            render: {
                visible: true,
                fillStyle: '#ffffff',
            },
        });
        var slidingWall2 = Matter.Bodies.rectangle(1080 - 380, 800, 800, 20, {
            isStatic: true,
            angle: -0.3,
            render: {
                visible: true,
                fillStyle: '#ffffff',
            },
        });
        Matter.World.add(this.game.engine.world, [slidingWall, slidingWall2]);
    }
}
export default Level7;
