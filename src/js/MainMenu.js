import React from 'react';
import Logo from '@/images/webpack-logo.svg';
import {
  Link
} from "react-router-dom";

class MainMenu extends React.Component {
    constructor(props) {
      super(props);
      let currentLevel = 1;
      if (localStorage.getItem('currentLevel')) {
        currentLevel = parseInt(localStorage.getItem('currentLevel'));
      }
      if (currentLevel <= 0) {
        currentLevel = 0;
      }
      this.state = {
        currentLevel: currentLevel
      };
    }
  
    componentDidMount() {
    }
  
    render() {
      return <div className="flex content-center flex-wrap h-screen">
        <div className="container mx-auto">
          
        {this.state.currentLevel > 1 ?
          <Link to={{
            pathname: '/level/' + this.state.currentLevel
          }} className="block px-4 py-2 mb-2 bg-red-500 text-center">
            Continue
          </Link>
          : ''
        }
        <Link to="/level/1" className="block px-4 py-2 mb-2 bg-white text-center">Play</Link>
        <div onClick={window.close} className="cursor-pointer block px-4 py-2 mb-2 bg-gray-500 text-center">Exit</div>
      </div>
      </div>;
    }
  }
  export default MainMenu;