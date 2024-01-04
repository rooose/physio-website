import { Suspense } from "react";
import { useImage } from "react-image";

function MyImageComponent() {
  const { src } = useImage({
    srcList: "./src/Assets/bebe.jpg",
  });

  return <img className="w-1/3" src={src} />;
}

export default function Reeducation() {
  return (
    <div className="page flex gap-10 justify-left bg-sky-900">
      <Suspense>
        <MyImageComponent />
      </Suspense>
      <div className="text-neutral-200 text-justify p-20">
        La rééducation périnéale et pelvienne est un des nombreux volets de la
        physiothérapie. Elle consiste à rééduquer les muscles du plancher
        pelviens qui se situent sous le bassin entre le coccyx et le pubis. Sous
        forme de hamac, ces muscles soutiennent les organes pelviens,
        contribuent à la continence urinaire et anale de même qu'au plaisir
        sexuel en plus de participer au contrôle de la région lombo-pelvienne.
        Le mauvais fonctionnement de ces muscles peut entrainer:
        <br />
        <br />
        <ul>
          <li>- Des fuites urinaires</li>
          <li>- Des descentes d'organes (prolapsus)</li>
          <li>
            - De la douleur dans la région pelvienne, périnéale, abdominale et
            lombaire
          </li>
          <li>
            - Certains troubles liés à la sexualité, en particulier la douleur
          </li>
        </ul>
        <br />
        <br />
        La première visite consiste principalement à évaluer votre condition.
        Suite à un questionnaire exhaustif pour mieux cerner le problème pour
        lequel vous consultez, nous effectuons un examen physique qui comprend
        une évaluation de la fonction des muscles du plancher pelvien par voie
        vaginale dans la position gynécologique. Dans certaines situations, il
        est aussi possible de faire une évaluation par voie externe.
      </div>
    </div>
  );
}
