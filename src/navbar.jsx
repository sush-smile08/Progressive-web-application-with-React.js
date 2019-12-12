import React, {Component} from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

class Navbar extends Component {
    state ={}
    render(){
        return(
            <div className="navbar">
            <Link to="/news">News</Link>
            <Link to="/profile">Profile</Link>
          </div>
        );
    }
}

export default Navbar;