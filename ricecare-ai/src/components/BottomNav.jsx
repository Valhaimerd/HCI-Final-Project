import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const tabs = [
  { label: "Home", to: "/home", icon: "home", match: ["/home"] },
  { label: "Scan", to: "/scan", icon: "scan", match: ["/scan", "/photo-guide"] },
  { label: "History", to: "/history", icon: "history", match: ["/history", "/result-details"] },
  { label: "Help", to: "/help", icon: "help", match: ["/help", "/common-problems"] },
  { label: "Settings", to: "/settings", icon: "settings", match: ["/settings", "/manage-consent", "/about"] },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {tabs.map((tab) => {
        const active = tab.match.some((path) => location.pathname.startsWith(path));
        return (
        <Link key={tab.to} to={tab.to} className={`nav-tab ${active ? "active" : ""}`}>
          <Icon name={tab.icon} size={21} />
          <span>{tab.label}</span>
        </Link>
        );
      })}
    </nav>
  );
}
