import React, { Component } from "react";
import { MenuItem } from "./MenuItem";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className='Navbar-item'>
        <h1 className='navbar-logo'>The Beatles</h1>
        <ul className='nav-menu'>
          {MenuItem.map((items, index) => {
            return (
              <li key={index}>
                <a className={items.cName} href={items.url}>
                  {items.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
