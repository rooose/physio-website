import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <header className="bg-zinc-300">
        <div id="header-top">
          <nav id="nav-wrap" className="px-4 min-w-fit w-1/2">
            <span className="left-nav">
              <a>Fr</a>|<a>En</a>
            </span>
            <ul id="nav" className="right-nav">
              <li>
                <a href="tel:514-843-3733">(514) 843-3733</a>
              </li>
              <li>
                <a href="mailto:iguevin.physio@gmail.com">
                  iguevin.physio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/mZLBSqb9vCC4wWhz8"
                  target="_blank"
                >
                  350 Bd Saint-Joseph E
                </a>
              </li>
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
    );
  }
}

export default Header;
