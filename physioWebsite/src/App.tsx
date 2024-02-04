import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { useTranslation } from "react-i18next";
import LandingPage from "./components/Pages/landingpage";
import Footer from "./components/footer";
import Formations from "./components/Pages/formations";
import Contact from "./components/Pages/contact";
import Reeducation from "./components/Pages/reeducation";
import Pediatrie from "./components/Pages/pediatrie";

import {BrowserView, MobileView} from 'react-device-detect';

export default function App() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="content-wrap flex flex-col max-h-full items-center">
        <BrowserView>
          <Header />
          <Navigation setIndex={setIndex} />
          <div className="mt-6">
            {index == 0 && <LandingPage setIndex={setIndex} />}
            {index == 1 && <Reeducation />}
            {index == 2 && <Formations />}
            {index == 3 && <Contact />}
            {index == 4 && <Pediatrie />}
          </div>
          <Footer />
        </BrowserView>
        <MobileView>
          <h1 className="disclaimer">Site mobile en construction :)</h1>
        </MobileView>
      </div>
    </div>
  );
}
