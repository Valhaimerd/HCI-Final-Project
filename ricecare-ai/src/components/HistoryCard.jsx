import Button from "./Button";
import Card from "./Card";
import RiskBadge from "./RiskBadge";

export default function HistoryCard({ item }) {
  return (
    <Card className="history-card">
      <div className="row row-between">
        <div>
          <p className="eyebrow">{item.date}</p>
          <h3>{item.possibleIssue}</h3>
        </div>
        <RiskBadge riskLevel={item.riskLevel} />
      </div>
      <p>{item.confidence}% confidence | {item.status}</p>
      <Button to={`/result-details/${item.id}`} variant="secondary">View Details</Button>
    </Card>
  );
}
