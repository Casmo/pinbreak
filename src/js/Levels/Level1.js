import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level1 extends BaseLevel {

    render() {
      return <div>
        <div className="flex items-center justify-center h-screen w-screen" ref="scene">
          <canvas ref="canvas" className="object-contain w-auto h-auto max-h-screen max-w-screen" />
        </div>
      </div>;
    }
  }
  export default Level1;