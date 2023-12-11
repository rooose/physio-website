import { Dispatch, SetStateAction } from "react";
import "./navigation.css";
import { useTranslation } from "react-i18next";

interface Props {
  setIndex: Dispatch<SetStateAction<number>>;
}

export default function Navigation({ setIndex }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex gap-2 mt-6">
        <button onClick={() => setIndex(0)} className="nav-button">
          {t("home")}
        </button>
        <button onClick={() => setIndex(1)} className="nav-button">
          {t("contact")}
        </button>
        <button onClick={() => setIndex(2)} className="nav-button">
          {t("formations")}
        </button>
        <button onClick={() => setIndex(3)} className="nav-button">
          3
        </button>
      </div>
    </>
  );
}
