import React, { Component } from 'react';
import './NavBar.css';
import healball from '../layout/heal-ball.png';
import waterball from '../layout/water-ball.png';
import logo from '../layout/Team-Rocket-Pokedex.png';

class NavBar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <img src={healball} style={{width: '5vw', height: 'auto'}} />
                    <a href=""><img src={logo}  /></a>
                    <img src={waterball} style={{width: '5vw', height: 'auto'}} />
                </nav>
            </div>
        )
    }
}
export default NavBar;