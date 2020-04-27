import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level5 extends BaseLevel {

  game = {
    numberOfTries: 10,
    goals: [
    {
      _overRule: true,
      object: null,
      position: {
        x: 1080/2,
        y: 450
      },
      options: {
        isStatic: false,
        // frictionAir: 1,
        render: {
          fillStyle: 'blue'
        }
      }
    },
    {
      _overRule: true,
      object: null,
      position: {
        x: 1080/2,
        y: 800
      },
      options: {
        isStatic: false,
        // frictionAir: 1,
        render: {
          fillStyle: 'blue'
        }
      }
    },
    {
      object: null,
      width: 600,
      height: 50,
      position: {
        x: 1080/2,
        y: 600
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

  }
  export default Level5;