import { useRiceCare } from "../App";
import { mockReviewRequest } from "../data/mockReviewRequests";
import { ActionStack, AdvisoryNotice, AppShell, AuditTimeline, Button, Card, RiskBadge } from "../components";

export default function ReviewSubmitted() {
  const { lastReview } = useRiceCare();
  const review = lastReview || mockReviewRequest;

  return (
    <AppShell title="Review Submitted" showNav={false} className="no-nav">
      <Card>
        <h2>Review Request Submitted</h2>
        <p>Your request has been submitted for technician review.</p>
      </Card>
      <Card>
        <div className="row row-between">
          <div>
            <p className="eyebrow">Status: {review.status}</p>
            <h3>{review.submittedResult}</h3>
            <p>Submitted: {review.submittedAt}</p>
            <p>Location: {review.location}</p>
          </div>
          <RiskBadge riskLevel={review.riskLevel} />
        </div>
      </Card>
      <Card>
        <h3>Review Timeline</h3>
        <AuditTimeline events={review.timeline.map((item) => `${item.label} - ${item.status}`)} />
      </Card>
      <AdvisoryNotice type="warning">
        Technician review is simulated only. No real message was sent.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/review-status">View Review Status</Button>
        <Button to="/history" variant="secondary">View History</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
