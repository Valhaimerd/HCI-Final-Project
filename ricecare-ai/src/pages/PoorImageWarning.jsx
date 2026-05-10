import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card } from "../components";

export default function PoorImageWarning() {
  const { analysisMode } = useRiceCare();

  return (
    <AppShell title="Image May Be Unclear" backTo="/image-preview" showNav={false} className="no-nav">
      <Card>
        <h2>This photo may be unclear</h2>
        <p>This photo may be too blurry, dark, or far from the affected plant area.</p>
      </Card>
      <AdvisoryNotice type="warning">
        A clearer photo helps RiceCare AI provide a more useful advisory result.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/scan">Retake Photo</Button>
        <Button to="/photo-guide" variant="secondary">View Photo Guide</Button>
        <Button to={`/analyzing?mode=${analysisMode}`} variant="warning">Continue Anyway</Button>
      </ActionStack>
    </AppShell>
  );
}
