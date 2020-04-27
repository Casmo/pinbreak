import React from 'react';
import Matter from "matter-js";
import BaseLevel from './BaseLevel';

class Level6 extends BaseLevel {

  game = {
    goals: [
    {
      _overRule: true,
      type: 'rectangle',
      width: 1080,
      height: 20,
      position: {
        x: 1080/2,
        y: 60
      },
      options: {
        isStatic: true,
        // frictionAir: 1,
        render: {
          fillStyle: 'blue'
        }
      }
    },
    // row 1
    {
      object: null,
      position: {
        x: 1080/2,
        y: 1200
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    // row 2
    {
      object: null,
      position: {
        x: (1080/2) - 30,
        y: 1000
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    {
      object: null,
      position: {
        x: (1080/2) + 30,
        y: 1000
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    // row 3
    {
      object: null,
      position: {
        x: (1080/2) + 50,
        y: 800
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    {
      object: null,
      position: {
        x: (1080/2) - 50,
        y: 800
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    // row 4
    {
      object: null,
      position: {
        x: (1080/2),
        y: 500
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    {
      object: null,
      position: {
        x: (1080/2) + 70,
        y: 500
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    },
    {
      object: null,
      position: {
        x: (1080/2) - 70,
        y: 500
      },
      options: {
        render: {
          fillStyle: 'red'
        }
      }
    }
  ]
    }

  }
  export default Level6;