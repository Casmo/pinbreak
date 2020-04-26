import React from 'react';
import {
  Link
} from "react-router-dom";

import Level1 from "./Levels/Level1";
import Level2 from "./Levels/Level2";

class Level extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        currentLevel: props.match.params.level
      };
      this.refresh = this.refresh.bind(this);
      this.nextLevel = this.nextLevel.bind(this);
    }

    componentDidMount() {
    }

    refresh() {
      let currentLevel = this.state.currentLevel;
      this.setState({
        currentLevel: 0
      });
      this.forceUpdate();
      setTimeout(() => {

        this.setState({
          currentLevel: currentLevel
        });
      }, 1);
    }

    nextLevel() {
      this.setState({
        currentLevel: (this.state.currentLevel + 1)
      });
    }
  
    render() {
      let level;
      if (this.state.currentLevel == 1) {
        level = <Level1 nextLevel = {this.nextLevel} />;
      }
      if (this.state.currentLevel == 2) {
        level = <Level2 nextLevel = {this.nextLevel} />;
      }
      return <div>
        <div className="fixed left-0 top-0 m-4">
          <span className="relative z-0 inline-flex shadow-sm">
            <Link to="/" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
              <svg className="h-5 w-5" fillRule="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </Link>
            <button onClick={this.refresh} className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
              Restart level
            </button>
          </span>
        </div>
        {level}
      </div>;
    }
  }
  export default Level;