import React, {Component} from 'react';
import './App.css';

class FollowUsContainer extends Component {
  render() {
    return (
      <div>
        <div className="follow-us container">
        <div className="follow-us-description">
          <h4> Follow Us </h4>
        </div>
        <div>
          <a href="https://twitter.com/?lang=en"><img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" width="50" height="50" /></a>
          <a href="https://www.facebook.com/"><img src="http://simpleicon.com/wp-content/uploads/facebook-2.png" width="50" height="50" /></a>
          <a href="https://twitter.com/?lang=en"><img src="https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/rss.png" width="50" height="50" /></a>
          <a href="https://twitter.com/?lang=en"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" width="50" height="50" /></a>

        </div>
        </div>
      </div>
    )
  }
}

export default FollowUsContainer;
