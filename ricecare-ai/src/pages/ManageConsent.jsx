import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card, ToggleRow } from "../components";

export default function ManageConsent() {
  const { consentSettings, updateConsentSettings } = useRiceCare();
  const setValue = (key, value) => updateConsentSettings({ [key]: value });

  return (
    <AppShell title="Manage Consent" backTo="/settings">
      <Card>
        <h2>Consent options</h2>
        <p>You can review how images and saved results are used in this prototype.</p>
        <ToggleRow label="Allow image analysis" description="Required for advisory analysis." checked={consentSettings.imageAnalysis} onChange={(value) => setValue("imageAnalysis", value)} />
        <ToggleRow label="Save scan results" description="Stores records in this browser." checked={consentSettings.saveResults} onChange={(value) => setValue("saveResults", value)} />
        <ToggleRow label="Allow technician sharing" description="Optional simulated sharing." checked={consentSettings.technicianSharing} onChange={(value) => setValue("technicianSharing", value)} />
        <ToggleRow label="Allow anonymized image use for improvement" description="Optional prototype setting." checked={consentSettings.anonymizedUse} onChange={(value) => setValue("anonymizedUse", value)} />
      </Card>
      <AdvisoryNotice>
        You can use advisory analysis without allowing optional data sharing.
      </AdvisoryNotice>
      <ActionStack>
        <Button to="/settings">Save Consent Settings</Button>
        <Button to="/settings" variant="secondary">Back to Settings</Button>
      </ActionStack>
    </AppShell>
  );
}
