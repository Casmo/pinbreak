import React from 'react';
import {
  Link
} from "react-router-dom";

import Level1 from "./Levels/Level1";

class Level extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        currentLevel: props.match.params.level
      };
      this.refresh = this.refresh.bind(this);
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
  
    render() {
      let level;
      if (this.state.currentLevel == 1) {
        level = <Level1 />;
      }
      return <div>
        <div className="fixed left-0 top-0 m-4">
        <Link to="/">Menu</Link>
        <a onClick={this.refresh}>Klik</a>
        </div>
        {level}
      </div>;
    }
  }
  export default Level;