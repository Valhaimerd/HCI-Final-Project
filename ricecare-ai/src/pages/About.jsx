import { ActionStack, AdvisoryNotice, AppShell, Button, Card } from "../components";
import { riskAwarenessNote } from "../data/mockAiResults";

export default function About() {
  return (
    <AppShell title="About RiceCare AI" backTo="/settings">
      <Card>
        <h2>What the app does</h2>
        <p>RiceCare AI is a Human-Centered AI advisory prototype for rice farmers. It helps farmers check possible pest and disease issues using plant images.</p>
      </Card>
      <Card>
        <h2>What the app does not do</h2>
        <p>It does not provide a final expert diagnosis, contact real technicians, or detect disease with a real AI model.</p>
      </Card>
      <Card>
        <h2>Why human confirmation matters</h2>
        <p>AI results can be affected by image quality and field conditions. A technician can help confirm uncertain or serious cases.</p>
      </Card>
      <Card>
        <h2>Prototype note</h2>
        <p>This is a static class prototype that uses mock AI logic only.</p>
      </Card>
      <AdvisoryNotice>
        RiceCare AI provides advisory support only. It is not a final expert diagnosis.
      </AdvisoryNotice>
      <AdvisoryNotice type="warning">{riskAwarenessNote}</AdvisoryNotice>
      <ActionStack>
        <Button to="/settings" variant="secondary">Back to Settings</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
