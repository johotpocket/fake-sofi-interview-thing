import React, {Component} from 'react';
import './App.css';

class TestimonyContainer extends Component {
  render() {
    return (
      <div>
        <div className="container description-container">
        <div className="container testimony">
            <p> @manpacks is awesome. Between @manpacks, @zappos, and @soap.com, I might never have to run errands again. </p>
            <p> -@natehennings </p>
        </div>
        <div className="container testimony">
            <p> Maybe its silly, but @manpacks is my FAVORITE SAAS service that I pay for. Socks as a Service, amirite? </p>
            <p> -@alexknowshtml </p>
        </div>
        </div>
      </div>
    )
  }
}

export default TestimonyContainer;
