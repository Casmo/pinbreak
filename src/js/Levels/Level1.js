import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level1 extends BaseLevel {

    start() {
      
      // var wallRight = Matter.Bodies.rectangle(this.game.settings.width-100, this.game.settings.height / 2, 80, this.game.settings.height, {
      //   isStatic: true,
      //   render: {
      //     visible: true
      //   }
      // });
      // Matter.World.add(this.game.engine.world, wallRight);
    }
  }
  export default Level1;