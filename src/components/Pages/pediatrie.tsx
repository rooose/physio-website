import { Suspense } from "react";
import { useImage } from "react-image";

function MyImageComponent() {
  const { src } = useImage({
    srcList: "./src/Assets/bebe.jpg",
  });

  return <img className="w-1/3" src={src} />;
}

export default function Pediatrie() {
  return (
    <div className="page flex gap-10 justify-between bg-sky-900">
      <Suspense>
        <MyImageComponent />
      </Suspense>

      <div className="text-neutral-200 p-20 flex flex-col items-center gap-10">
        <b>Êtes-vous êtes préoccupé parce que:</b>
        <ul>
          <li>
            - Votre enfant a tendance à tourner sa tête plus facilement d'un
            côté que de l'autre?
          </li>
          <li>- A tendance à avoir la tête plus souvent penchée d'un côté?</li>
          <li>- Sa tête commence à se déformer?</li>
          <li>
            - Il présente un retard ou une anomalie dans l'acquisition de ses
            habiletés motrices comme se tenir assis, ramper, macher à quatre
            pattes ou marcher seul de façon autonome?
          </li>
        </ul>
        La physiothérapie peut vous aider dans ces situations. Après une
        première visite d'évaluation pour bien cerner la condition et les
        habitudes de vie, un plan de traitement sera élaboré. En plus de la
        thérapie en clinique, des conseils à appliquer à la maison ainsi que des
        exercices de stimulation, d'étirement et ou de renforcement pourront
        vous être enseignés.
      </div>
    </div>
  );
}
