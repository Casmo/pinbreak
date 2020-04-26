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
        density: 0.1,
        restitution: .8,
        collisionFilter: {
            category: 0x0002
        },
        render: {
            fillStyle: '#ffffff'
        }
      },
      rock2: {
        density: 0.1,
        restitution: .8,
        render: {
            fillStyle: '#ffffff'
        }
      },
      player: {
        position: {
          x: 200,
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
    elastic: null,
    /**
     * List with all objects to hit
     */
    goals: [
      {
        object: null,
        position: {
          x: 1080/2,
          y: 500
        },
        options: {
          isStatic: false,
          gravityScale: 0,
          render: {
            fillStyle: 'red'
          }
        }
      }
    ]
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
        enableSleeping: true
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
          background: 'rgb(10,0,0)',
          showSleeping: false
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
      
      // Matter.Engine.run(this.game.engine);
      Matter.Render.run(this.game.render);
      
      // create runner
      var runner = Matter.Runner.create();
      Matter.Runner.run(runner, this.game.engine);

      this.game.goals.map((goal, key) => {
        this.game.goals[key].object = Matter.Bodies.circle(
          goal.position.x,
          goal.position.y,
          40,
          goal.options
        );
      
        Matter.Events.on(this.game.goals[key].object, 'sleepStart', (event) => {
          // Check endgame conditions
          this.checkEndGameConditions();
        });
        
        Matter.World.add(this.game.engine.world, this.game.goals[key].object);
      });

      Matter.Events.on(this.game.engine, 'collisionStart', (event) => {
        var pairs = event.pairs;

        // change object colours to show those in an active collision (e.g. resting contact)
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if (pair.bodyA._type == 'player' || pair.bodyB._type == 'player') {
              // Player always overrides the colors
              pair.bodyA.render.fillStyle = '#ffffff';
              pair.bodyB.render.fillStyle = '#ffffff';
              pair.bodyA._complete = true;
              pair.bodyB._complete = true;
            }
            else {

            }
        }
      });
    }

    /**
     * Loop through goals and check if all goals are sleeping and hitted by the player.
     * If true, winner and next game
     */
    checkEndGameConditions() {
      console.log('check for winning conditions');
      let win = true;
      this.game.goals.map((goal, index) => {
        console.log(goal);
        if (goal.object._complete != true) {
          win = false;
        }
      });
      console.log('Did you win?', win);
    }

    /**
     * Create a player (position and the rock settings)
     */
    addPlayer() {
      this.game.rock = Matter.Bodies.circle(
        this.game.settings.player.position.x,
        this.game.settings.player.position.y,
        40,
        this.game.settings.rock
      );
      this.game.rock._type = 'player';

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
            collisionFilter: {
                mask: 0x0002
            },
          mouse: this.game.mouse,
          constraint: {
              stiffness: 0.1,
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
                this.game.rock.collisionFilter.category = 0x001;
                // Remove group from previous (the shooting) rock
              this.game.rock = Matter.Bodies.circle(
                this.game.settings.player.position.x,
                this.game.settings.player.position.y,
                40,
                this.game.settings.rock
              );
              this.game.rock._type = 'player';
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
      this.addPlayer();
      this.start();
    }

    start() {
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