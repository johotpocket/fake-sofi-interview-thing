import React, { Component } from 'react';
import './App.css';
import DescriptionContainer from './DescriptionContainer';
import FeaturedInContainer from './FeaturedInContainer';
import TestimonyContainer from './TestimonyContainer';
import FollowUsContainer from './FollowUsContainer';
import SplashbodyContainer from './SplashbodyContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App container">
          <img className="header-logo" src="https://www.manpacks.com/_img/press/manpacks_logo.png"></img>
        </div>
        <div>
          <SplashbodyContainer />
        </div>
        <div>
          <FeaturedInContainer />
        </div>
        <div>
          <DescriptionContainer />
        </div>
        <div>
          <TestimonyContainer />
        </div>
        <div>
          <FollowUsContainer />
        </div>
      </div>
    );
  }
}

export default App;
