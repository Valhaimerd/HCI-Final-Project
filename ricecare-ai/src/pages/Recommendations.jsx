import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card, RiskBadge } from "../components";

export default function Recommendations() {
  const { currentAiResult } = useRiceCare();
  const result = currentAiResult;

  return (
    <AppShell title="Recommended Actions" backTo="/result" showNav={false} className="no-nav">
      <Card>
        <div className="row row-between">
          <div>
            <p className="eyebrow">For</p>
            <h2>{result.possibleIssue}</h2>
          </div>
          <RiskBadge riskLevel={result.riskLevel} />
        </div>
      </Card>
      <Card>
        <h3>Treatment Steps</h3>
        <ol className="number-list">
          {result.treatmentSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </Card>
      <Card>
        <h3>Prevention Tips</h3>
        <ol className="number-list">
          {result.preventionTips.map((tip) => <li key={tip}>{tip}</li>)}
        </ol>
      </Card>
      <Card>
        <h3>Recommended Farming Practice</h3>
        <p>{result.recommendedPractice}</p>
      </Card>
      <AdvisoryNotice type={result.riskLevel === "High" ? "warning" : "info"}>
        {result.technicianAdvice}
      </AdvisoryNotice>
      <AdvisoryNotice type="warning">
        Ask a technician before applying chemical treatment, especially when many plants are affected.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/save-confirmation">Save Result</Button>
        <Button to="/technician-support" variant="secondary">Share with Technician</Button>
        {result.riskLevel === "High" && (
          <Button to="/treatment-warning" variant="warning">Before Taking Action</Button>
        )}
        <Button to="/result" variant="secondary">Back to Result</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
