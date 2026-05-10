import Card from "./Card";
import Icon from "./Icon";

export default function AdvisoryNotice({ children, type = "info" }) {
  const icon = type === "warning" ? "alert" : "shieldwithcheck";
  return (
    <Card className={`notice notice-${type}`}>
      <Icon name={icon} size={24} />
      <p>{children}</p>
    </Card>
  );
}
