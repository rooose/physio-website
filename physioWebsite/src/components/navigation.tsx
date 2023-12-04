import { Dispatch, SetStateAction } from "react";
import "./navigation.css";

interface Props {
  setIndex: Dispatch<SetStateAction<number>>;
}

export default function Navigation({ setIndex }: Props) {
  return (
    <>
      <div className="flex grow-1 justify-space-between">
        <button onClick={() => setIndex(0)} className="nav-button">
          0
        </button>
        <button onClick={() => setIndex(1)} className="nav-button">
          1
        </button>
        <button onClick={() => setIndex(2)} className="nav-button">
          2
        </button>
        <button onClick={() => setIndex(3)} className="nav-button">
          3
        </button>
      </div>
    </>
  );
}
