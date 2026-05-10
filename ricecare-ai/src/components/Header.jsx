import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Header({ title, backTo }) {
  return (
    <header className="app-header">
      {backTo ? (
        <Link className="icon-button" to={backTo} aria-label="Go back">
          <Icon name="back" size={20} />
        </Link>
      ) : (
        <span className="header-spacer" />
      )}
      <h1>{title}</h1>
      <span className="header-spacer" />
    </header>
  );
}
