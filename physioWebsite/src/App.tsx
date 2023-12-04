import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Navigation from "./components/navigation";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Header />
        <Navigation setIndex={setIndex} />
        {index == 0 && <div>Page 0</div>}
        {index == 1 && <div>Page 1</div>}
        {index == 2 && <div>Page 2</div>}
        {index == 3 && <div>Page 3</div>}
      </div>

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </>
  );
}

export default App;
