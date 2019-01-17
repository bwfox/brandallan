import React, {Component} from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Trains from "./Trains";
import Tanks from "./Tanks";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Stuff that is #BrandAllan</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/trains">Trains</NavLink></li>
            <li><NavLink to="/tanks">Tanks</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/trains" component={Trains}/>
            <Route path="/tanks" component={Tanks}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;