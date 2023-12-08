import React, { ReactElement } from "react";
import i18n from './i18n.tsx';
import "./header.css";


const Header = (): ReactElement => {
  return (
    <header className="bg-zinc-300 w-full justify-center">
      <div id="header-top">
        <nav id="nav-wrap" className="pl-4 min-w-fit w-1/2">
          <span className="left-nav">
            <a href="#" onClick={() => {i18n.changeLanguage('fr'); return false;}}>Fr</a>|<a href="#" onClick={() => {i18n.changeLanguage('en'); return false}}>En</a>
          </span>

          <ul id="nav" className="right-nav">
            <li className="min-w-fit">
              <a href="tel:514-843-3733">(514) 843-3733</a>
            </li>
            <li className="min-w-fit">
              <a href="mailto:iguevin.physio@gmail.com">
                iguevin.physio@gmail.com
              </a>
            </li>
            <li className="min-w-fit">
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
};

export default Header;
