import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useRiceCare } from "../App";
import { getMockAiResult } from "../utils/mockAnalysis";
import { mockAiResults } from "../data/mockAiResults";
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

export default function Result() {
  const [params] = useSearchParams();
  const { currentAiResult, setCurrentAiResult, selectedImage } = useRiceCare();
  const mode = params.get("mode");

  useEffect(() => {
    if (mode) setCurrentAiResult(getMockAiResult(mode));
  }, [mode, setCurrentAiResult]);

  const result = currentAiResult || mockAiResults[0];
  const isUncertain = result.id === "uncertain";
  const image = selectedImage || "/images/scan-rice.jpg";
  const detections = result.detections?.length
    ? result.detections
    : [
        { x: 24, y: 34, size: 14 },
        { x: 51, y: 55, size: 16, primary: true },
        { x: 73, y: 49, size: 13 },
        { x: 59, y: 67, size: 14 },
      ];

  return (
    <AppShell showNav={false} className="result-screen no-nav">
      <header className="guide-topbar result-topbar">
        <Link to="/scan" className="screen-icon-button" aria-label="Back to scan">
          <Icon name="back" size={24} />
        </Link>
        <h1>Analysis Result</h1>
        <span className="header-spacer" />
      </header>

      <section className={`result-issue-card ${riskClass(result.riskLevel)}`}>
        <div className="result-issue-heading">
          <span>Possible Issue</span>
          <strong className={`result-risk-pill ${riskClass(result.riskLevel)}`}>
            <Icon name="alert" size={15} />
            {riskLabel(result.riskLevel)}
          </strong>
        </div>
        <h2>{result.possibleIssue}</h2>
        <div className="result-confidence-box">
          <span className="result-confidence-icon">
            <Icon name="verified" size={23} />
          </span>
          <span>AI Confidence Score</span>
          <strong>{result.confidence}%</strong>
        </div>
      </section>

      <section className="result-image-card">
        <div className="result-card-title">
          <Icon name="image" size={22} />
          <h2>Analyzed Image</h2>
        </div>
        <div className="result-image" style={{ backgroundImage: `url("${image}")` }}>
          {detections.map((detection, index) => (
            <span
              className={`result-hotspot ${detection.primary ? "primary" : ""}`}
              key={`${detection.x}-${detection.y}-${index}`}
              style={{
                left: `${detection.x}%`,
                top: `${detection.y}%`,
                width: `${detection.size || 14}px`,
                height: `${detection.size || 14}px`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="result-explain-card">
        <div className="result-card-title">
          <Icon name="braincog" size={23} />
          <h2>Why this result?</h2>
        </div>
        <p>{result.explanation}</p>
        <aside className="result-advisory-note">
          <Icon name="information" size={22} />
          <p>{result.advisoryNote} Always verify with a local agricultural technician if unsure.</p>
        </aside>
      </section>

      {isUncertain && (
        <aside className="result-warning-note">
          <Icon name="alert" size={20} />
          <p>The image does not clearly match one known pest or disease. Retake the photo or ask a technician for confirmation.</p>
        </aside>
      )}

      <div className="result-actions">
        <Link to={isUncertain ? "/photo-guide" : "/recommendations"} className="result-primary-action">
          <Icon name={isUncertain ? "camera" : "document"} size={22} />
          <span>{isUncertain ? "Photo Guide" : "View Recommendations"}</span>
        </Link>
        <div className="result-secondary-grid">
          <Link to="/technician-support" className="result-outline-action">
            <Icon name="technician" size={20} />
            <span>Ask Technician</span>
          </Link>
          <Link to="/scan" className="result-outline-action">
            <Icon name="camera" size={20} />
            <span>Retake Photo</span>
          </Link>
        </div>
        <Link to="/report-wrong-result" className="result-report-action">
          <Icon name="review" size={18} />
          <span>Report Wrong Result</span>
        </Link>
      </div>
    </AppShell>
  );
}
