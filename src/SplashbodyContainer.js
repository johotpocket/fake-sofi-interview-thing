import React, {Component} from 'react';
import './App.css';

class SplashbodyContainer extends Component {
  render() {
    return (
      <div>
        <div className="splashbody-main container">
        <div className="splashbody-image">
          <img src="http://cdn3-www.craveonline.com/assets/uploads/2015/08/getty-shaving-e1440441752340.jpg"></img>
        </div>
        <div className="splashbody-content">

          <h2 className="morning-ritual"> Your morning ritual, defined. </h2>
          <p> Get underwear, socks and shaving essentials shipped to your door.
          The easiest way to stay fresh and clean. </p>

          <button className="btn-productsandpricing"> Products and Pricing </button>

          <h6> Fear commitment? No problem. We offer a hassle free return promise. </h6>

        </div>
        </div>
      </div>
    )
  }
}

export default SplashbodyContainer;
