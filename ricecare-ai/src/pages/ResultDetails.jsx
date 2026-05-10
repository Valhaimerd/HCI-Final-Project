import { Navigate, useParams } from "react-router-dom";
import { useRiceCare } from "../App";
import {
  ActionStack,
  AppShell,
  AuditTimeline,
  Button,
  Card,
  ConfidenceBar,
  ImagePreviewCard,
  RiskBadge,
} from "../components";

export default function ResultDetails() {
  const { id } = useParams();
  const { historyItems } = useRiceCare();
  const item = historyItems.find((record) => record.id === id);

  if (!item) return <Navigate to="/history" replace />;

  return (
    <AppShell title="Result Details" backTo="/history">
      <ImagePreviewCard title="Saved plant image with highlighted areas" />
      <Card>
        <div className="row row-between">
          <div>
            <p className="eyebrow">{item.date}</p>
            <h2>{item.possibleIssue}</h2>
            <p>{item.category} | {item.status}</p>
          </div>
          <RiskBadge riskLevel={item.riskLevel} />
        </div>
      </Card>
      <Card>
        <ConfidenceBar confidence={item.confidence} />
      </Card>
      <Card>
        <h3>Why this result?</h3>
        <p>{item.explanation}</p>
      </Card>
      <Card>
        <h3>Treatment summary</h3>
        <p>{item.treatmentSummary}</p>
      </Card>
      <Card>
        <h3>Prevention summary</h3>
        <p>{item.preventionSummary}</p>
      </Card>
      <Card>
        <h3>Audit Detail</h3>
        <AuditTimeline events={item.auditTrail} />
      </Card>
      <ActionStack>
        <Button to="/technician-support">Share with Technician</Button>
        <Button to="/technician-support" variant="secondary">Ask Technician Again</Button>
        <Button to={`/delete-confirmation/${item.id}`} variant="danger">Delete Result</Button>
        <Button to="/history" variant="text">Back to History</Button>
      </ActionStack>
    </AppShell>
  );
}
