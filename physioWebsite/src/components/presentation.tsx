import "./landingpage.css";
import { Props } from "./navigation";
import { Suspense } from "react";
import { useImage } from "react-image";

function MyImageComponent() {
  const { src } = useImage({
    srcList: "./src/Assets/isa.jpg",
  });

  return <img className="w-1/3" src={src} />;
}

export default function Presentation({ setIndex }: Props) {
  return (
    <div className="page flex gap-10 justify-between bg-sky-900">
      <Suspense>
        <MyImageComponent />
      </Suspense>

      <div className="text-neutral-200 p-20 flex flex-col justify-center items-center gap-20">
        Tout au long de mon parcours professionnel j'ai toujours été passionnée
        par le fonctionnement du corps humain et ses capacités d'adaptation et
        de guérison à tous les âges de la vie. Ainsi, je n'ai jamais cessé de me
        former afin de mieux le comprendre et être outillée pour traiter:
        <br />
        <br />
        <ul>
          <li>
            - Les adultes et les enfants souffrant de blessures, qu'elles soient
            d'origine sportive ou non et les conditions douloureuses
            musculosquelettiques
            <br />
            <br />
          </li>
          <li>
            - Les femmes présentant des problèmes urinaires ou des douleurs
            pelviennes tout au long de leur parcours de vie aussi bien à la
            ménopause que pendant la grossesse, en préparation à l'accouchement
            ou en post-partum pour le retour sécuritaire aux activités physiques
            <br />
            <br />
          </li>
          <li>
            - Les bébés ayant un torticolis congénital avec ou sans
            plagiocéphalie (déformation de la tête)
            <br />
            <br />
          </li>
          <li>
            - Les bébés présentant des problèmes de développement moteur légers
            <br />
            <br />
          </li>
        </ul>
        <button onClick={() => setIndex(3)} className="w-96">
          Prendre Rendez-vous
        </button>
      </div>
    </div>
  );
}
