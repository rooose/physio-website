import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { useTranslation } from "react-i18next";
import LandingPage from "./components/landingpage";
import Footer from "./components/footer";

export default function App() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col grow-1 w-full max-h-full items-center">
        <Header />
        <Navigation setIndex={setIndex} />
        <div className="mt-20 w-2/3 h-auto">
          {index == 0 && <LandingPage />}
          {index == 1 && <div>{t("page1")}</div>}
          {index == 2 && <div>{t("page2")}</div>}
          {index == 3 && <div>{t("page3")}</div>}
        </div>
        <Footer />
      </div>
    </>
  );
}
