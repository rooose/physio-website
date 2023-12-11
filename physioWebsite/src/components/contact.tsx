import "./contact.css";

export default function Contact() {
  return (
    <div className="page flex justify-left bg-sky-900">
      <img className="w-1/3" src="./src/Assets/calendar.jpg" />
      <div className="text-neutral-200 p-20 flex grow flex-col items-center gap-12">
        <h1>Me Joindre</h1>
        <div className="flex flex-col grow items-center">
          <a
            className="anchor"
            href="https://maps.app.goo.gl/mZLBSqb9vCC4wWhz8"
            target="_blank"
          >
            350 Boulevard Saint-Joseph Est #107
          </a>
          <div>Plateau Mont-Royal, Montréal</div>
          <div>H2T 1J4</div>
          <div>(514) 843-3733</div>
          <div>iguevin.pyshio@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
