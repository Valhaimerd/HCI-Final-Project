export default function RiskBadge({ riskLevel }) {
  const tone = {
    Low: "low",
    Medium: "medium",
    High: "high",
    "Needs Review": "review",
  }[riskLevel] || "neutral";

  const label = riskLevel === "Needs Review" ? "Needs Review" : `${riskLevel} Risk`;
  return <span className={`risk-badge risk-${tone}`}>{label}</span>;
}
