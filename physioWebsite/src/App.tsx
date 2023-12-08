import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import { useTranslation } from 'react-i18next';


function App() {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Header />
        <Navigation setIndex={setIndex} />
        {index == 0 && <div>{t('page0')}</div>}
        {index == 1 && <div>{t('page1')}</div>}
        {index == 2 && <div>{t('page2')}</div>}
        {index == 3 && <div>{t('page3')}</div>}
      </div>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
