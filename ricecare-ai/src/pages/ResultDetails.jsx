import { Link, Navigate, useParams } from "react-router-dom";
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

function detailReasons(item) {
  if (item.reasons?.length) return item.reasons;

  if (item.riskLevel === "Low") {
    return [
      "Leaf color appears stable.",
      "No major visible spotting detected.",
      "Continue regular field monitoring.",
    ];
  }

  if (item.possibleIssue.includes("Brown Spot")) {
    return [
      "Small circular brown marks detected.",
      "Discoloration appears on visible leaves.",
      "Symptoms may match Brown Spot patterns.",
    ];
  }

  return [
    "Diamond-shaped lesions detected.",
    "Lesion centers are gray or white.",
    "Brown borders are characteristic of Rice Blast.",
  ];
}

function timeline(item) {
  const shared = item.status === "Shared with Technician" || item.status === "Under Review";
  return [
    { title: "Image uploaded", detail: `${item.date} - 10:42 AM`, complete: true },
    { title: "Analysis completed", detail: `${item.date} - 10:43 AM`, complete: true },
    { title: "Result viewed", detail: `${item.date} - 10:45 AM`, complete: true },
    { title: shared ? "Shared" : "Shared", detail: shared ? item.status : "Not yet shared", complete: shared },
  ];
}

export default function ResultDetails() {
  const { id } = useParams();
  const { historyItems } = useRiceCare();
  const item = historyItems.find((record) => record.id === id);

  if (!item) return <Navigate to="/history" replace />;

  const tone = riskClass(item.riskLevel);
  const image = item.detailImage || item.image || "/images/scan-rice.jpg";
  const detections = item.detections?.length
    ? item.detections
    : [{ x: 51, y: 55, size: 16, primary: true }];
  const primaryIndex = Math.max(
    detections.findIndex((detection) => detection.primary),
    0
  );

  return (
    <AppShell showNav={false} className="result-detail-screen no-nav">
      <header className="guide-topbar">
        <Link to="/history" className="screen-icon-button" aria-label="Back to previous results">
          <Icon name="back" size={24} />
        </Link>
        <h1>Result Details</h1>
        <Link to="/help" className="screen-icon-button" aria-label="Open Help Center">
          <Icon name="help" size={24} />
        </Link>
      </header>

      <section className="detail-hero-card">
        <img src={image} alt="" />
        <span className={`detail-risk-pill ${tone}`}>
          <Icon name={item.riskLevel === "Low" ? "check" : "alert"} size={14} />
          {riskLabel(item.riskLevel)}
        </span>
        {detections.map((detection, index) => {
          const isPrimary = index === primaryIndex;
          const ringSize = Math.max((detection.size || 14) * (isPrimary ? 6.4 : 5.1), isPrimary ? 88 : 58);

          return (
            <span
              className={`detail-detection-area ${isPrimary ? "primary" : "secondary"}`}
              key={`${detection.x}-${detection.y}-${index}`}
              style={{
                left: `${detection.x}%`,
                top: `${detection.y}%`,
                "--detection-ring-size": `${ringSize}px`,
              }}
            >
              <span className="detail-detection-ring" />
              <span className="detail-detection-index">{index + 1}</span>
              {isPrimary && <span className="detail-detection-label">Main Detection</span>}
            </span>
          );
        })}
      </section>

      <section className="detail-summary-card">
        <div className="detail-summary-heading">
          <div>
            <h2>Possible Issue: {item.possibleIssue}</h2>
            <p>Analyzed on {item.date}</p>
          </div>
          <span className="detail-summary-icon">
            <Icon name={item.riskLevel === "Low" ? "verified" : "bug"} size={25} />
          </span>
        </div>
        <div className="detail-confidence">
          <span>AI Confidence</span>
          <strong>{item.confidence}%</strong>
        </div>
        <div className="detail-confidence-track" aria-hidden="true">
          <span style={{ width: `${item.confidence}%` }} />
        </div>
        <div className="detail-detection-count">
          <Icon name="scan" size={18} />
          <span>{detections.length} detected {detections.length === 1 ? "area" : "areas"} shown on image</span>
        </div>
      </section>

      <section className="detail-reason-card">
        <div className="detail-card-title">
          <Icon name="braincog" size={22} />
          <h2>Why this result?</h2>
        </div>
        <ul>
          {detailReasons(item).map((reason) => (
            <li key={reason}>
              <Icon name="check" size={16} />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-timeline-card">
        <h2>Activity Timeline</h2>
        <ol>
          {timeline(item).map((event) => (
            <li className={event.complete ? "complete" : ""} key={`${event.title}-${event.detail}`}>
              <span className="detail-timeline-dot" />
              <span>
                <strong>{event.title}</strong>
                <small>{event.detail}</small>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="detail-actions">
        <Link to="/technician-support" className="detail-primary-action">
          <Icon name="share" size={21} />
          <span>Share with Technician</span>
        </Link>
        <Link to="/technician-support" className="detail-secondary-action">
          <Icon name="chat" size={22} />
          <span>Ask Technician Again</span>
        </Link>
        <Link to={`/delete-confirmation/${item.id}`} className="detail-danger-action">
          <Icon name="delete" size={20} />
          <span>Delete Result</span>
        </Link>
      </div>
    </AppShell>
  );
}
