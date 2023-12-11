import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { useTranslation } from "react-i18next";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";
import Formations from "./components/formations";
import Contact from "./components/contact";

export default function App() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="content-wrap flex flex-col max-h-full items-center">
        <Header />
        <Navigation setIndex={setIndex} />
        <div className="mt-6">
          {index == 0 && <LandingPage setIndex={setIndex} />}
          {index == 1 && <div>{t("page1")}</div>}
          {index == 2 && <Formations />}
          {index == 3 && <Contact />}
        </div>
        <Footer />
      </div>
    </div>
  );
}
