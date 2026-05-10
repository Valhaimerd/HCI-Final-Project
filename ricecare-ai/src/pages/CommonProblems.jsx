import { ActionStack, AppShell, Button, Card, Badge } from "../components";
import { commonRiceProblems } from "../data/commonRiceProblems";

export default function CommonProblems() {
  return (
    <AppShell title="Common Rice Problems" backTo="/help">
      {commonRiceProblems.map((problem) => (
        <Card key={problem.id}>
          <div className="row row-between">
            <h2>{problem.name}</h2>
            <Badge>{problem.type}</Badge>
          </div>
          <p>{problem.simpleDescription}</p>
          <h3>Common visible signs</h3>
          <ul className="plain-list">
            {problem.commonSigns.map((sign) => <li key={sign}>{sign}</li>)}
          </ul>
          <h3>When to ask technician</h3>
          <p>{problem.askTechnicianWhen}</p>
        </Card>
      ))}
      <ActionStack>
        <Button to="/scan">Scan Plant</Button>
        <Button to="/technician-support" variant="secondary">Ask Technician</Button>
        <Button to="/help" variant="text">Back to Help</Button>
      </ActionStack>
    </AppShell>
  );
}
