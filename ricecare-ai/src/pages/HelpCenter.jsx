import { Link } from "react-router-dom";
import { AppShell, Icon } from "../components";

const guideCards = [
  {
    icon: "scan",
    title: "How to Scan",
    summary: "Step-by-step guide for scanning rice plants.",
    to: "/scan",
  },
  {
    icon: "camera",
    title: "How to Take a Clear Photo",
    summary: "Tips for better lighting, focus, and framing.",
    to: "/photo-guide",
  },
  {
    icon: "graph",
    title: "Understanding Your Result",
    summary: "Learn confidence, risk level, and advisory notes.",
    to: "/help/understanding-ai-results",
  },
  {
    icon: "technician",
    title: "When to Ask a Technician",
    summary: "Know when human confirmation is important.",
    to: "/help/when-to-ask-technician",
  },
  {
    icon: "grass",
    title: "Common Rice Plant Problems",
    summary: "Review common symptoms and field issues.",
    to: "/common-problems",
  },
  {
    icon: "shieldwithlock",
    title: "Privacy and Image Use",
    summary: "Understand consent and saved records.",
    to: "/help/privacy-and-image-use",
  },
];

export default function HelpCenter() {
  return (
    <AppShell className="help-screen">
      <header className="guide-brand">
        <Link to="/home" className="guide-logo" aria-label="Go home">
          <Icon name="plant" size={24} />
        </Link>
        <strong>RiceCare AI</strong>
        <span className="guide-help-badge">
          <Icon name="help" size={25} />
        </span>
      </header>

      <section className="help-intro">
        <h1>Help and Farmer Guide</h1>
        <p>Choose a guide to learn how to scan, understand results, or protect your information.</p>
      </section>

      <section className="help-guide-list" aria-label="Help topics">
        {guideCards.map((card) => (
          <Link to={card.to} className="help-guide-card" key={card.title}>
            <span className="help-guide-icon">
              <Icon name={card.icon} size={24} />
            </span>
            <span className="help-guide-copy">
              <strong>{card.title}</strong>
              <small>{card.summary}</small>
            </span>
            <span className="help-guide-arrow" aria-hidden="true">&gt;</span>
          </Link>
        ))}
      </section>
    </AppShell>
  );
}
