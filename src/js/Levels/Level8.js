import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level7 extends BaseLevel {

  game = {
    world: {
      gravity: {
        x: 0,
        y: .5
      },
    },
    goals: [
    {
      _overRule: true,
      object: null,
      position: {
        x: 100,
        y: 100
      },
      options: {
        render: {
          fillStyle: 'blue'
        }
      },
    },
    {
      object: null,
      position: {
        x: 200,
        y: 1000
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    },
    {
      object: null,
      position: {
        x: 50,
        y: 1000
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    },
    {
      object: null,
      position: {
        x: 50,
        y: 900
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    },
    {
      object: null,
      position: {
        x: 70,
        y: 600
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    },
    {
      object: null,
      position: {
        x: 100,
        y: 800
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    },
    {
      object: null,
      position: {
        x: 250,
        y: 500
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      },
    }
  ]
    }

    myObjects = {

    }



    start() {

      this.myObjects.slidingWall = Matter.Bodies.rectangle(380, 400, 800, 20, {
        isStatic: true,
        angle: .45,
        render: {
          visible: true,
          fillStyle: '#ffffff'
        }
      });
      this.myObjects.slidingWall._type = 'wall';

      this.myObjects.wall2 = Matter.Bodies.rectangle(250, 1100, 600, 20, {
        isStatic: true,
        angle: -.2,
        render: {
          visible: true,
          fillStyle: '#ffffff'
        }
      });
      this.myObjects.wall2._type = 'wall';

      this.myObjects.movingWall = Matter.Bodies.rectangle((1080-150), 1300, 400, 20, {
        isStatic: true,
        angle: -.5,
        render: {
          visible: true,
          fillStyle: '#ffffff'
        }
      });
      this.myObjects.movingWall._type = 'wall';
      Matter.World.add(this.game.engine.world, [this.myObjects.slidingWall, this.myObjects.wall2, this.myObjects.movingWall]);
    }

    beforeUpdate() {
// make bodyA move up and down
        // body is static so must manually update velocity for friction to work
        var py = 1300 + 200 * Math.sin(this.game.engine.timing.timestamp * 0.0025);
        Matter.Body.setVelocity(this.myObjects.movingWall, { x: 0, y: py - this.myObjects.movingWall.position.y });
        Matter.Body.setPosition(this.myObjects.movingWall, { x: (1080-150), y: py });
    }

  }
  export default Level7;