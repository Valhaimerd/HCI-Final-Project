import { ActionStack, AdvisoryNotice, AppShell, Button, Card } from "../components";

export default function TreatmentWarning() {
  return (
    <AppShell title="Before Taking Action" backTo="/recommendations" showNav={false} className="no-nav">
      <Card>
        <h2>Use care before treatment</h2>
        <p>Ask a technician before applying chemical treatment, especially when many plants are affected.</p>
      </Card>
      <AdvisoryNotice type="warning">
        RiceCare AI provides advisory support only. It is not a final expert diagnosis.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/technician-support">Ask Technician</Button>
        <Button to="/recommendations" variant="secondary">Return to Recommendations</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
