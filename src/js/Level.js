import React from 'react';
import {
  Link
} from "react-router-dom";
import Matter from "matter-js";

class Level extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;

        const width = 720;
        const height = 1280;
  
      var engine = Engine.create({
        // positionIterations: 20
      });

      var render = Render.create({
        canvas: this.refs.canvas,
        element: this.refs.scene,
        engine: engine,
        options: {
          width: width,
          height: height,
          wireframes: false
        }
      });

      // Add walls & floors
      var floor = Bodies.rectangle(width / 2, height + 40, width, 80, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var ceiling = Bodies.rectangle(width / 2, -40, width, 80, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var wallLeft = Bodies.rectangle(-40, height / 2, 80, height, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      var wallRight = Bodies.rectangle(width+40, height / 2, 80, height, {
        isStatic: true,
        render: {
          visible: false
        }
      });
      World.add(engine.world, ceiling);
      World.add(engine.world, floor);
      World.add(engine.world, wallLeft);
      World.add(engine.world, wallRight);

      var player = Bodies.circle(100, 100, 30, {restitution: 1.5});

      World.add(engine.world, player);
  
      var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
      var ballB = Bodies.circle(110, 50, 30, { restitution: 0.5 });
  
      // World.add(engine.world, [ballA, ballB]);
  
      // add mouse control
      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false
            }
          }
        });
  
      World.add(engine.world, mouseConstraint);
  
      Matter.Events.on(mouseConstraint, "mousedown", function(event) {
        World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
      });
  
      Engine.run(engine);
  
      Render.run(render);
    }
  
    render() {
      return <div>
        <Link to="/" className="fixed left-0 top-0 m-4">Menu</Link>
        <div className="flex items-center justify-center w-screen h-screen" ref="scene">
          <canvas ref="canvas" className="object-contain h-full w-full" />
        </div>
      </div>;
    }
  }
  export default Level;