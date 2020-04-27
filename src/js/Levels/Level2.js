import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level2 extends BaseLevel {

  game = {
    goals: [
    {
      object: null,
      position: {
        x: (1080/2) + 400,
        y: 200
      },
      options: {
        isStatic: false,
        // frictionAir: 1,
        render: {
          fillStyle: 'red'
        }
      }
    }
  ]
    }

    start() {

      var firstWall = Matter.Bodies.rectangle(this.game.settings.width / 2, 600, 500, 20, {
        isStatic: true,
        angle: -.9,
        render: {
          visible: true,
          fillStyle: '#ffffff'
        }
      });

      var secondWall = Matter.Bodies.rectangle((this.game.settings.width / 2) + 250, 700, 500, 20, {
        isStatic: true,
        angle: -.9,
        render: {
          visible: true,
          fillStyle: '#ffffff'
        }
      });
      Matter.World.add(this.game.engine.world, [firstWall, secondWall]);
    }

  }
  export default Level2;