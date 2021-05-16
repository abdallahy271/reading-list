import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './BookList.css';
import APICall from './APICall.js' 
import ReadingList from "./ReadingList.js";
import Suggestions from "./Suggestions.js";


class BookList extends Component {
    constructor(){
        super()
        this.state = {
    click:true
        }
        this.ButtonPress = this.ButtonPress.bind(this)

    }
    

    ButtonPress(){
        this.setState(prevState => ({
            click: !prevState.click
          }));
    
console.log(this.state.click)
    }
  render() {
      let  classsNameOfNavbar = this.state.click ? 'navbar' : 'navbar1'

    return (
        <div>
            <button onClick={this.ButtonPress} className="hamburgerMenu"> &#9776;</button>
      <Router>
        <div className="nav-container">
          <nav className={classsNameOfNavbar}>
            <Link to="/" className="navbar-brand"></Link>
            <div className="test">
              <ul className="nav">
                <li className="navbar-item">
                <Link to="/Home" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                <Link to="/Search" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                <Link to="/ReadingList" className="nav-link">Reading list</Link>
                </li>
              
              </ul>
            </div>
          </nav>
          <br/>

        
          <Route path="/Home/" component={Suggestions} />  
          <Route path="/Search/" component={APICall} />    
          <Route path="/ReadingList/" component={ReadingList} />
        </div>
      </Router>
   
      </div>
    );
  }
}

export default BookList;