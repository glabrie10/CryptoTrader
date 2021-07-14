import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
       <header>
         <div className="container">
           <h3 className="logo">
             <a href="#">CryptoTrader</a>
           </h3>
           <nav>
             <li><a href="#">home</a></li>
             <li><a href="#">coins</a></li>
             <li><a href="#">contact</a></li>
             <li><a href="#">about</a></li>

           </nav>


         </div>
       </header>
    )
  }
}