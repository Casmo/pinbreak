import React from 'react';
import {
  Link
} from "react-router-dom";

class Levels extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        levels: [
          {
            name: 'Introduction'
          },
          {
            name: 'Ready to Rock'
          }
        ]
      };
    }
  
    componentDidMount() {
    }
  
    render() {
      return <div>
        <Link to="/">Menu</Link>
        <div className="flex flex-wrap">
        {this.state.levels.map((level, index) =>
          <div key={index} className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-1/3">{level.name}</div>
        )}
        </div>
      </div>;
    }
  }
  export default Levels;