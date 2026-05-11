import { Link } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Card, Icon } from "../components";

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

function statusIcon(status) {
  if (status === "Under Review") return "technician";
  if (status === "Shared with Technician") return "share";
  return "save";
}

const auditEvents = [
  { icon: "image", title: "Image checked", detail: "Mar 21, 2026 - 10:14 AM" },
  { icon: "braincog", title: "Result generated", detail: "Mar 21, 2026 - 10:15 AM" },
  { icon: "save", title: "Saved", detail: "Mar 21, 2026 - 10:18 AM" },
  { icon: "share", title: "Shared", detail: "Pending action" },
];

export default function History() {
  const { historyItems } = useRiceCare();

  return (
    <AppShell className="history-screen">
      <header className="dashboard-brand">
        <Link className="dashboard-logo" to="/home" aria-label="RiceCare AI home">
          <Icon name="plant" size={23} />
          <span>RiceCare AI</span>
        </Link>
        <Link className="dashboard-help-icon" to="/help" aria-label="Open Help Center">
          <Icon name="help" size={21} />
        </Link>
      </header>

      <section className="history-intro">
        <h1>Previous Results</h1>
        <p>Saved results help farmers track crop health over time and identify recurring issues across seasons.</p>
      </section>

      <section className="history-result-list" aria-label="Saved scan results">
        {historyItems.length ? (
          historyItems.map((item) => (
            <Link className="history-result-card" to={`/result-details/${item.id}`} key={item.id}>
              <div className="history-card-heading">
                <div>
                  <h2>{item.possibleIssue}</h2>
                  <span className="history-date">
                    <Icon name="date" size={14} />
                    {item.date}
                  </span>
                </div>
                <span className={`history-risk-pill ${riskClass(item.riskLevel)}`}>
                  <Icon name={item.riskLevel === "Low" ? "check" : "alert"} size={14} />
                  {riskLabel(item.riskLevel)}
                </span>
              </div>

              <img className="history-result-image" src={item.image || "/images/scan-rice.jpg"} alt="" />

              <div className="history-card-footer">
                <span className={`history-status ${riskClass(item.riskLevel)}`}>
                  <Icon name={statusIcon(item.status)} size={15} />
                  {item.status}
                </span>
                <span>Conf: {item.confidence}%</span>
              </div>
            </Link>
          ))
        ) : (
          <Card className="history-empty-card">
            <h2>No saved results shown</h2>
            <p>Scan a rice plant to save a new advisory result.</p>
          </Card>
        )}
      </section>

      <section className="history-audit-card">
        <h2>Audit Trail</h2>
        <ol className="history-audit-list">
          {auditEvents.map((event) => (
            <li key={event.title}>
              <span className="history-audit-icon">
                <Icon name={event.icon} size={15} />
              </span>
              <span>
                <strong>{event.title}</strong>
                <small>{event.detail}</small>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </AppShell>
  );
}
