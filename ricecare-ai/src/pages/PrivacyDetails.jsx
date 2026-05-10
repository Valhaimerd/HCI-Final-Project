import { useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card } from "../components";

const sections = [
  ["How your image is used", "Plant images are used for advisory analysis in this prototype."],
  ["What is saved", "Saved scan results can appear in History and can be deleted by the user."],
  ["Optional sharing with technician", "Human review is simulated and only happens when you choose that flow."],
  ["Deleting saved scan history", "Saved results can be removed from the Result Details screen."],
  ["Advisory limitation", "The app supports decisions but does not replace agricultural technicians."],
];

export default function PrivacyDetails() {
  const navigate = useNavigate();
  const { setConsentAccepted } = useRiceCare();
  const continueToHome = () => {
    setConsentAccepted(true);
    navigate("/home");
  };

  return (
    <AppShell title="Privacy Details" backTo="/consent" showNav={false} className="no-nav">
      {sections.map(([title, body]) => (
        <Card key={title}>
          <h3>{title}</h3>
          <p>{body}</p>
        </Card>
      ))}
      <AdvisoryNotice>
        RiceCare AI provides advisory support only. It is not a final expert diagnosis.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/consent" variant="secondary">Back to Consent</Button>
        <Button to="/help" variant="secondary">Back to Help</Button>
        <Button to="/settings" variant="secondary">Back to Settings</Button>
        <Button onClick={continueToHome}>Continue to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
