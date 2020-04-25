import React from 'react';
import Logo from '@/images/webpack-logo.svg';
import {
  Link
} from "react-router-dom";

class MainMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentLevel: 1
      };
    }
  
    componentDidMount() {
    }
  
    render() {
      return <div className="">
        {this.state.currentLevel > 1 ?
          <Link to="/levels" className="block px-4 py-2 mb-2 bg-red-500 text-center">Continue</Link>
          : ''
        }
        <Link to="/levels" className="block px-4 py-2 mb-2 bg-red-500 text-center">Play</Link>
        <div onClick={window.close()} className="block px-4 py-2 mb-2 bg-gray-200 text-center">Exit</div>
      </div>;
    }
  }
  export default MainMenu;