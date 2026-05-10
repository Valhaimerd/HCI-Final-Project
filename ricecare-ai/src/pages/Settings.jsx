import { useRiceCare } from "../App";
import { ActionStack, AppShell, Button, Card, ToggleRow } from "../components";

export default function Settings() {
  const { settings, updateSettings } = useRiceCare();

  return (
    <AppShell title="Settings">
      <Card className="settings-group">
        <h2>Accessibility</h2>
        <p>These prototype settings visibly adjust the interface.</p>
        <div className="section">
          <h3>Text Size</h3>
          <div className="segmented">
            {["normal", "large"].map((value) => (
              <button
                className={`segment ${settings.textSize === value ? "active" : ""}`}
                key={value}
                onClick={() => updateSettings({ textSize: value })}
              >
                {value === "normal" ? "Normal" : "Large"}
              </button>
            ))}
          </div>
        </div>
        <div className="section">
          <h3>Language</h3>
          <select
            className="select-field"
            value={settings.language}
            onChange={(event) => updateSettings({ language: event.target.value })}
          >
            <option>English</option>
            <option>Filipino</option>
            <option>Local Language</option>
          </select>
        </div>
        <ToggleRow label="Voice Guidance" description="Visual toggle only for prototype." checked={settings.voiceGuidance} onChange={(value) => updateSettings({ voiceGuidance: value })} />
        <ToggleRow label="High Contrast Mode" description="Stronger text and borders." checked={settings.highContrastMode} onChange={(value) => updateSettings({ highContrastMode: value })} />
        <ToggleRow label="Simple Mode" description="Reduces extra helper text." checked={settings.simpleMode} onChange={(value) => updateSettings({ simpleMode: value })} />
      </Card>
      <Card className="settings-group">
        <h2>Privacy and Saved Data</h2>
        <Button to="/manage-consent" variant="secondary">Manage consent</Button>
        <Button to="/privacy-details" variant="secondary">View privacy information</Button>
        <Button to="/history" variant="secondary">Delete saved scan history</Button>
        <Button to="/technician-support" variant="secondary">Manage technician contact</Button>
      </Card>
      <Card>
        <h2>About</h2>
        <Button to="/about" variant="secondary">About RiceCare AI</Button>
      </Card>
      <ActionStack>
        <Button to="/home">Save Settings</Button>
      </ActionStack>
    </AppShell>
  );
}
