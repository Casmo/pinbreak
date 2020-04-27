import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level2 extends BaseLevel {

  game = {
    goals: [
    {
      object: null,
      position: {
        x: 1080/2,
        y: 500
      },
      options: {
        density: 0.1,
        restitution: .8,
        isStatic: false,
        // frictionAir: 1,
        render: {
          fillStyle: 'red'
        }
      }
    },
    {
      object: null,
      position: {
        x: 1080/2,
        y: 300
      },
      options: {
        density: 0.1,
        restitution: .8,
        isStatic: false,
        // frictionAir: 1,
        render: {
          fillStyle: 'red'
        }
      }
    }
  ]
    }

  }
  export default Level2;