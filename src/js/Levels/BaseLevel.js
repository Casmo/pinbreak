import React from 'react';
import Matter from "matter-js";

class BaseLevel extends React.Component {

  /**
   * Matter JS game objects
   */
  game = {
    settings: {
      numberOfTried: 5,
      width: 1080,
      height: 1920,
      /**
       * Setting for the rock that will be throwned by the player
       */
      rock: {
        density: .01,
        restitution: 1
      },
      player: {
        position: {
          x: 1080 / 2,
          y: 1920 - 400
        }
      }
    },
    engine: null,
    render: null,

    // Default game objects
    rock: null,
    mouse: null,
    mouseConstraint: null,
    elastic: null
  }

    constructor(props) {
      super(props);
      this.state = {};
    }

    /**
     * Create the world of matter.js
     */
    initWorld() {
  
      this.game.engine = Matter.Engine.create({
        // positionIterations: 20
      });


      this.game.render = Matter.Render.create({
        canvas: this.refs.canvas,
        element: this.refs.scene,
        engine: this.game.engine,
        options: {
          width: this.game.settings.width,
          height: this.game.settings.height,
          wireframes: false,
          showAngleIndicator: false,
          background: 'rgb(10,0,0)'
        }
      });
      
      // Add walls & floors
      var floor = Matter.Bodies.rectangle(this.game.settings.width / 2, this.game.settings.height + 40, this.game.settings.width, 80, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var ceiling = Matter.Bodies.rectangle(this.game.settings.width / 2, -40, this.game.settings.width, 80, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var wallLeft = Matter.Bodies.rectangle(-40, this.game.settings.height / 2, 80, this.game.settings.height, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var wallRight = Matter.Bodies.rectangle(this.game.settings.width+40, this.game.settings.height / 2, 80, this.game.settings.height, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      Matter.World.add(this.game.engine.world, ceiling);
      Matter.World.add(this.game.engine.world, floor);
      Matter.World.add(this.game.engine.world, wallLeft);
      Matter.World.add(this.game.engine.world, wallRight);

      this.addPlayer();
      
      // Matter.Engine.run(this.game.engine);
      Matter.Render.run(this.game.render);
      
      // create runner
      var runner = Matter.Runner.create();
      Matter.Runner.run(runner, this.game.engine);
    }

    /**
     * Create a player (position and the rock settings)
     */
    addPlayer() {
      this.game.rock = Matter.Bodies.polygon(
        this.game.settings.player.position.x,
        this.game.settings.player.position.y,
        8,
        20,
        this.game.settings.rock
      );
      this.game.elastic = Matter.Constraint.create({ 
          pointA: this.game.settings.player.position, 
          bodyB: this.game.rock, 
          stiffness: 0.05
      });
      Matter.World.add(this.game.engine.world, [
        this.game.rock, this.game.elastic
      ]);


      // add mouse control
      this.game.mouse = Matter.Mouse.create(this.game.render.canvas);
      this.game.mouseConstraint = Matter.MouseConstraint.create(this.game.engine, {
          mouse: this.game.mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: true
              }
          }
      });

      Matter.World.add(this.game.engine.world, this.game.mouseConstraint);

      // keep the mouse in sync with rendering
      // this.game.render.mouse = this.game.mouse;
      
      // Mouse controls
      Matter.Events.on(this.game.engine, 'afterUpdate', () => {
          if (this.game.mouseConstraint.mouse.button === -1 && (
            this.game.rock.position.y < (this.game.settings.player.position.y-20))
            ) {
              this.game.rock = Matter.Bodies.polygon(
                this.game.settings.player.position.x,
                this.game.settings.player.position.y,
                7,
                20,
                this.game.settings.rock
              );
              Matter.World.add(this.game.engine.world, this.game.rock);
              this.game.elastic.bodyB = this.game.rock;
          }
      });

    }

    clearWorld() {
      Matter.World.clear(this.game.engine.world);
      Matter.Engine.clear(this.game.engine);
    }

    componentWillUnmount() {
      this.clearWorld();
    }
  
    componentDidMount() {
      this.initWorld();
    }
  
    render() {
      return <div>
        <div className="flex items-center justify-center h-screen w-screen" ref="scene">
          <canvas ref="canvas" className="object-contain w-auto h-auto max-h-screen max-w-screen" />
        </div>
      </div>;
    }
  }
  export default BaseLevel;