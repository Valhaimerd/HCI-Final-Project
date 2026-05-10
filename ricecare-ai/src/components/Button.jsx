import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  icon,
}) {
  const className = `button button-${variant}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={20} />}
      <span>{children}</span>
    </>
  );

  if (to && !disabled) {
    return (
      <Link className={className} to={to} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
