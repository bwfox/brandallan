import React, {Component} from "react";
import cornImage from './resources/corn.jpg'

class Corn extends Component {
  render() {
    return (
      <div>
        <h2>CORN</h2>
        <p>I love to eat (and drink) corn all day. Here's an example of my favourite drink:</p>
        <img src={cornImage} alt="Delicious beverage (maybe also food)"/>
      </div>
    );
  }
}

export default Corn;