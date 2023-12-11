import "./landingpage.css";
import Presentation from "./presentation";
import Welcome from "./welcome";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className=" text-sky-950 ">Isabelle Guévin </h1>
      <h2 className=" text-sky-950 ">Physiothérapeute </h2>
      <Welcome />
      <Presentation />
    </div>
  );
}
