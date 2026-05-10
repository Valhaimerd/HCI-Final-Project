import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import {
  ActionStack,
  AdvisoryNotice,
  AppShell,
  Button,
  Card,
  FormField,
  ImagePreviewCard,
  RiskBadge,
} from "../components";

export default function TechnicianSupport() {
  const navigate = useNavigate();
  const { currentAiResult, selectedImage, submitReview } = useRiceCare();
  const [form, setForm] = useState({
    farmerName: "",
    location: "",
    description: "",
    contactNumber: "",
  });
  const canSubmit = form.farmerName && form.location && form.description;

  const setField = (key, value) => setForm((data) => ({ ...data, [key]: value }));

  const submit = () => {
    submitReview(form, "Technician Review");
    navigate("/review-submitted");
  };

  return (
    <AppShell title="Need Human Confirmation?" backTo="/result" showNav={false} className="no-nav">
      <Card>
        <h2>Ask a technician</h2>
        <p>If you think the AI result is incorrect or uncertain, you can request help from an agricultural technician.</p>
        <p className="optional-helper">Human review helps avoid relying only on AI.</p>
      </Card>
      <Card>
        <div className="row row-between">
          <div>
            <p className="eyebrow">AI summary</p>
            <h3>{currentAiResult.possibleIssue}</h3>
            <p>{currentAiResult.confidence}% confidence | Status: Needs confirmation</p>
          </div>
          <RiskBadge riskLevel={currentAiResult.riskLevel} />
        </div>
      </Card>
      <ImagePreviewCard image={selectedImage} title="Uploaded plant image" />
      <Card className="section">
        <FormField label="Farmer Name" value={form.farmerName} onChange={(value) => setField("farmerName", value)} placeholder="Sample Farmer" required />
        <FormField label="Location / Barangay" value={form.location} onChange={(value) => setField("location", value)} placeholder="Barangay Sample" required />
        <FormField label="Short Description of Problem" value={form.description} onChange={(value) => setField("description", value)} placeholder="Brown spots appeared on many leaves after heavy rain." textarea required />
        <FormField label="Contact Number" value={form.contactNumber} onChange={(value) => setField("contactNumber", value)} placeholder="Optional contact number" />
      </Card>
      <AdvisoryNotice>Contact number is optional and only used if a technician needs more information.</AdvisoryNotice>
      <AdvisoryNotice type="warning">
        This prototype does not send real SMS, email, or technician messages. The review request is simulated only.
      </AdvisoryNotice>
      <ActionStack>
        <Button onClick={submit} disabled={!canSubmit}>Submit for Review</Button>
        <Button to="/scan" variant="secondary">Retake Photo</Button>
        <Button to="/result" variant="text">Back to Result</Button>
      </ActionStack>
    </AppShell>
  );
}
