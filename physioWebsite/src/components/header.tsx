import React, {Component} from 'react';
import './header.css'

class Header extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
      return (
            <header>
                <div id="header-top">
                    <nav id="nav-wrap">
                        <span className="left-nav">
                            <a>Fr</a> 
                            |
                            <a>En</a>
                        </span>
                        <ul id="nav" className="right-nav">
                            <li><a href="tel:123-456-7890">(123) 456-769</a></li>
                            <li><a href="mailto:email@addresse.com">email@addresse.com</a></li>
                            <li><a href="https://maps.app.goo.gl/mZLBSqb9vCC4wWhz8" target="_blank">350 Bd Saint-Joseph E</a></li>
                        </ul>
                    </nav>
                </div>
                {/* <div id="header-top">
                    <nav id="nav-below">
                        <span>
                            Isabelle Guévin
                            Physiothérapeute et Ostéopathe
                            Membre de l'ordre des physiothérapeutes du Québec
                        </span>
                    </nav>
                </div> */}
            </header>
        )
    }
  }

  export default Header;