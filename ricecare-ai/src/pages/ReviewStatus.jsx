import { useRiceCare } from "../App";
import { mockReviewRequest } from "../data/mockReviewRequests";
import { ActionStack, AdvisoryNotice, AppShell, AuditTimeline, Button, Card, RiskBadge } from "../components";

export default function ReviewStatus() {
  const { lastReview } = useRiceCare();
  const review = lastReview || mockReviewRequest;

  return (
    <AppShell title="Technician Review Status" backTo="/review-submitted">
      <Card>
        <div className="row row-between">
          <div>
            <p className="eyebrow">{review.status}</p>
            <h2>{review.submittedResult}</h2>
            <p>{review.description}</p>
          </div>
          <RiskBadge riskLevel={review.riskLevel} />
        </div>
      </Card>
      <Card>
        <h3>Submitted Details</h3>
        <p>Date: {review.submittedAt}</p>
        <p>Location: {review.location}</p>
        <p>Confidence: {review.confidence}%</p>
      </Card>
      <Card>
        <h3>Timeline</h3>
        <AuditTimeline events={review.timeline.map((item) => `${item.label} - ${item.status}`)} />
      </Card>
      <AdvisoryNotice type="warning">
        This status is simulated for the prototype and does not show a real technician response.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/history">View History</Button>
        <Button to="/technician-support" variant="secondary">Ask Technician Again</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
