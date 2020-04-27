import React from 'react';
import Matter from 'matter-js';
import BaseLevel from './BaseLevel';

class Level4 extends BaseLevel {
    game = {
        goals: [
            {
                object: null,
                position: {
                    x: 1080 / 2,
                    y: 400,
                },
                options: {
                    isStatic: false,
                    // frictionAir: 1,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
            {
                type: 'rectangle',
                object: null,
                width: 600,
                height: 50,
                position: {
                    x: 1080 / 2,
                    y: 600,
                },
                options: {
                    isStatic: true,
                    // frictionAir: 1,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
        ],
    };
}
export default Level4;
