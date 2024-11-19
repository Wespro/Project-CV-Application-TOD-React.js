import Button from "./Button";
import "../styles Fiels/Nav.css";
export default function Nav({}) {
  return (
    <nav>
      <h2 className="generalInfoNav areaActive">General Info</h2>
      <h2 className="eduInfoNav">Educational Info</h2>
      <h2 className="profInfoNav">Profissional Exp</h2>
    </nav>
  );
}
