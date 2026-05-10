import Button from "./Button";
import Card from "./Card";
import Icon from "./Icon";

export default function HelpCard({ icon = "help", title, summary, to }) {
  return (
    <Card className="help-card">
      <div className="help-row">
        <Icon name={icon} size={28} />
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </div>
      <Button to={to} variant="secondary">Open</Button>
    </Card>
  );
}
