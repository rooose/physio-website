import { Suspense } from "react";
import { useImage } from "react-image";
function MyImageComponent() {
  const { src } = useImage({
    srcList: "./src/Assets/bebe.jpg",
  });

  return <img className="w-1/3" src={src} />;
}

export default function Formations() {
  return (
    <div className="page flex gap-10 justify-left bg-sky-900">
      {/* <img className="w-1/3" src="./src/Assets/bebe.jpg" /> */}
      <Suspense>
        <MyImageComponent />
      </Suspense>
      <div className="text-neutral-200 p-20">
        <ul>
          <li>
            <b>- Traitement des torticolis congénitaux et plagiocéphalie</b>
          </li>
          <br />
          <li>
            <b>- Développement moteur de l’enfant</b>
          </li>
          <br />
          <li>
            <b>- Course à pied (Clinique du coureur)</b>
          </li>
          <br />
          <li>
            <b>- Course à pied au féminin (Clinique du coureur)</b>
          </li>
          <br />
          <li>
            <b>- Pelvis Pro (CES)</b>
          </li>
          <br />
          <li>
            <b>- Épaule et coude</b>
          </li>
          <br />
          <li>
            <b>- Genoux</b>
          </li>
        </ul>
      </div>
    </div>
  );
}
