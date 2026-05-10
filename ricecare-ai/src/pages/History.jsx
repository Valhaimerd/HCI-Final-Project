import { useRiceCare } from "../App";
import { ActionStack, AppShell, AuditTimeline, Button, Card, HistoryCard } from "../components";

export default function History() {
  const { historyItems } = useRiceCare();
  const auditEvents = [
    "Image checked",
    "AI result generated",
    "Recommendation viewed",
    "Result saved",
    "Shared with technician",
  ];

  return (
    <AppShell title="Previous Results">
      <Card>
        <h2>Saved results and audit log</h2>
        <p>Saved results help farmers track crop health and support technician review.</p>
      </Card>
      {historyItems.length ? (
        historyItems.map((item) => <HistoryCard key={item.id} item={item} />)
      ) : (
        <Card>
          <h3>No saved results shown</h3>
          <p>Scan a rice plant to save a new advisory result.</p>
        </Card>
      )}
      <Card>
        <h3>Audit Trail</h3>
        <p>Simple records show what happened during advisory use.</p>
        <AuditTimeline events={auditEvents} />
      </Card>
      <ActionStack>
        <Button to="/scan">Scan New Plant</Button>
      </ActionStack>
    </AppShell>
  );
}
