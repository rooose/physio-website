import "./landingpage.css";

export default function Presentation() {
  return (
    <div className="page flex gap-10 justify-between bg-sky-900">
      <img className="w-1/3" src="./src/Assets/isa.jpg" />
      <div className="text-neutral-200 p-20">
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
          </li>
          <li>
            - Les femmes présentant des problèmes urinaires ou des douleurs
            pelviennes tout au long de leur parcours de vie aussi bien à la
            ménopause que pendant la grossesse, en préparation à l'accouchement
            ou en post-partum pour le retour sécuritaire aux activités physiques
          </li>
          <li>
            - Les bébés ayant un torticolis congénital avec ou sans
            plagiocéphalie (déformation de la tête)
          </li>
          <li>
            - Les bébés présentant des problèmes de développement moteur légers
          </li>
        </ul>
      </div>
    </div>
  );
}
