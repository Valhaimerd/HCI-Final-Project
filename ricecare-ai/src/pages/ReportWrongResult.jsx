import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card, FormField } from "../components";

export default function ReportWrongResult() {
  const navigate = useNavigate();
  const { submitReview } = useRiceCare();
  const [form, setForm] = useState({ wrong: "", observation: "", location: "" });
  const canSubmit = form.wrong && form.observation;
  const setField = (key, value) => setForm((data) => ({ ...data, [key]: value }));

  const submit = () => {
    submitReview(
      {
        farmerName: "Farmer report",
        location: form.location || "Location not provided",
        description: `${form.wrong} ${form.observation}`,
      },
      "Wrong Result Report"
    );
    navigate("/review-submitted");
  };

  return (
    <AppShell title="Report Wrong Result" backTo="/result" showNav={false} className="no-nav">
      <Card>
        <h2>Tell us what seems incorrect</h2>
        <p>Tell us why the result seems incorrect. This helps improve review and future advisory support.</p>
      </Card>
      <Card className="section">
        <FormField label="What seems wrong?" value={form.wrong} onChange={(value) => setField("wrong", value)} placeholder="The marks look different from the result." textarea required />
        <FormField label="What did you observe in the field?" value={form.observation} onChange={(value) => setField("observation", value)} placeholder="Many leaves turned yellow after rain." textarea required />
        <FormField label="Location / Barangay" value={form.location} onChange={(value) => setField("location", value)} placeholder="Optional barangay" />
      </Card>
      <AdvisoryNotice type="warning">
        This report is simulated for the prototype and does not contact a real support team.
      </AdvisoryNotice>
      <ActionStack>
        <Button onClick={submit} disabled={!canSubmit} variant="warning">Submit Report</Button>
        <Button to="/technician-support" variant="secondary">Ask Technician Instead</Button>
        <Button to="/result" variant="text">Back to Result</Button>
      </ActionStack>
    </AppShell>
  );
}
