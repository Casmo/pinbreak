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
            level: 1,
            name: 'Introduction'
          },
          {
            level: 2,
            name: 'Ready to Rock'
          }
        ]
      };
    }
  
    componentDidMount() {
    }
  
    render() {
      return <div>
        <Link to="/" className="fixed left-0 top-0 m-4">Menu</Link>
        <div className="flex items-center justify-center h-screen">
        {this.state.levels.map((level, index) =>
          <Link to={{
            pathname: '/level/' + level.level
          }} key={index} className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 w-1/3">
            {level.name}
          </Link>
        )}
        </div>
      </div>;
    }
  }
  export default Levels;