import React, {Component} from 'react';
import './App.css';

class FeaturedInContainer extends Component {
  render() {
    return (
      <div>
        <div className="featuredin-title container">
          <p> featured in: </p>
        </div>
        <div className="featured-in container">
        <h6> TechCrunch </h6>
        <h6> NBC </h6>
        <h6> MAXIM </h6>
        <h6> The New York Times </h6>
        <h6> Inc. </h6>
        <h6> Thrillist </h6>
        <h6> The Huffington Post </h6>
        <h6> npr </h6>
        <h6> ESPN Radio </h6>
        </div>
      </div>
    )
  }
}

export default FeaturedInContainer;
