import React from 'react';
import Matter from 'matter-js';
import BaseLevel from './BaseLevel';

class Level3 extends BaseLevel {
    game = {
        goals: [
            {
                object: null,
                position: {
                    x: 1080 / 2,
                    y: 500,
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
                object: null,
                position: {
                    x: 1080 / 2,
                    y: 300,
                },
                options: {
                    isStatic: false,
                    // frictionAir: 1,
                    render: {
                        fillStyle: 'red',
                    },
                },
            },
        ],
    };
}
export default Level3;
