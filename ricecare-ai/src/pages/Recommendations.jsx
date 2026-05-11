import { Link } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Icon } from "../components";

function riskLabel(riskLevel) {
  if (riskLevel === "High") return "High Risk";
  if (riskLevel === "Medium") return "Medium Risk";
  if (riskLevel === "Low") return "Low Risk";
  return "Needs Review";
}

function riskClass(riskLevel) {
  if (riskLevel === "High") return "high";
  if (riskLevel === "Medium") return "medium";
  if (riskLevel === "Low") return "low";
  return "review";
}

export default function Recommendations() {
  const { currentAiResult } = useRiceCare();
  const result = currentAiResult;
  const tone = riskClass(result.riskLevel);

  return (
    <AppShell showNav={false} className="recommendations-screen no-nav">
      <header className="guide-topbar recommendations-topbar">
        <Link to="/result" className="screen-icon-button" aria-label="Back to analysis result">
          <Icon name="back" size={24} />
        </Link>
        <h1>RiceCare AI</h1>
        <Link to="/help" className="screen-icon-button" aria-label="Open Help Center">
          <Icon name="help" size={24} />
        </Link>
      </header>

      <section className="recommendations-intro">
        <h2>Recommended Actions</h2>
        <div className="recommendations-for-row">
          <p>For: <strong>{result.possibleIssue}</strong></p>
          <span className={`recommendation-risk-pill ${tone}`}>
            <Icon name={result.riskLevel === "Low" ? "check" : "alert"} size={14} />
            {riskLabel(result.riskLevel)}
          </span>
        </div>
      </section>

      <section className="recommendations-important" aria-label="Important treatment notice">
        <span className="recommendations-important-icon">
          <Icon name="important" size={20} />
        </span>
        <div>
          <h3>Important Notice</h3>
          <p>Ask a technician before any chemical treatment. RiceCare AI is advisory support only.</p>
        </div>
      </section>

      <section className="recommendation-card treatment">
        <div className="recommendation-card-title">
          <span className="recommendation-card-icon">
            <Icon name="healthbox" size={21} />
          </span>
          <h3>Treatment Steps</h3>
        </div>
        <ol className="recommendation-check-list">
          {result.treatmentSteps.slice(0, 3).map((step) => (
            <li key={step}>
              <Icon name="check" size={18} />
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="recommendation-card prevention">
        <div className="recommendation-card-title">
          <span className="recommendation-card-icon">
            <Icon name="shield" size={21} />
          </span>
          <h3>Prevention</h3>
        </div>
        <ul className="recommendation-tip-list">
          {result.preventionTips.slice(0, 2).map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="recommendation-card best-practice">
        <div className="recommendation-card-title">
          <span className="recommendation-card-icon">
            <Icon name="leaf" size={21} />
          </span>
          <h3>Best Practice</h3>
        </div>
        <p>{result.recommendedPractice}</p>
      </section>

      <div className="recommendation-actions">
        <Link to="/technician-support" className="recommendation-share-action">
          <Icon name="share" size={22} />
          <span>Share with Technician</span>
        </Link>
        <div className="recommendation-secondary-actions">
          <Link to="/save-confirmation" className="recommendation-save-action">
            <Icon name="bookmark" size={21} />
            <span>Save Result</span>
          </Link>
          <Link to="/home" className="recommendation-home-action">
            <Icon name="home" size={21} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
