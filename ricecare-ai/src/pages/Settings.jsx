import { useState } from "react";
import { Link } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Icon } from "../components";

function SettingsSwitch({ checked, label, onClick }) {
  return (
    <button
      type="button"
      className={`settings-switch ${checked ? "on" : ""}`}
      onClick={onClick}
      aria-label={label}
      aria-pressed={checked}
    >
      <span />
    </button>
  );
}

function SettingsIcon({ name, tone = "green" }) {
  return (
    <span className={`settings-row-icon ${tone}`}>
      <Icon name={name} size={22} />
    </span>
  );
}

export default function Settings() {
  const { settings, updateSettings, clearSavedHistory } = useRiceCare();
  const [historyCleared, setHistoryCleared] = useState(false);

  const clearHistory = () => {
    clearSavedHistory();
    setHistoryCleared(true);
  };

  const toggleSetting = (key) => {
    updateSettings({ [key]: !settings[key] });
  };

  return (
    <AppShell className="settings-screen">
      <header className="settings-topbar">
        <Link to="/home" className="screen-icon-button" aria-label="Back to home">
          <Icon name="back" size={24} />
        </Link>
        <h1>Settings</h1>
        <Link to="/help" className="screen-icon-button" aria-label="Help">
          <Icon name="help" size={24} />
        </Link>
      </header>

      <section className="settings-section">
        <h2>Accessibility</h2>
        <div className="settings-panel">
          <div className="settings-row">
            <SettingsIcon name="text" />
            <div className="settings-row-copy">
              <strong>Text Size</strong>
              <small>Adjust app text size</small>
            </div>
            <div className="settings-size-control" aria-label="Text size">
              {["normal", "large"].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={settings.textSize === value ? "active" : ""}
                  onClick={() => updateSettings({ textSize: value })}
                >
                  {value === "normal" ? "Normal" : "Large"}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-row">
            <SettingsIcon name="langguage" />
            <div className="settings-row-copy">
              <strong>Language</strong>
              <small>Choose display language</small>
            </div>
            <select
              className="settings-select"
              value={settings.language}
              onChange={(event) => updateSettings({ language: event.target.value })}
              aria-label="Language"
            >
              <option>English</option>
              <option>Filipino</option>
              <option>Local Language</option>
            </select>
          </div>

          <div className="settings-row">
            <SettingsIcon name="voice" />
            <div className="settings-row-copy">
              <strong>Voice Guidance</strong>
              <small>Audio prompts for main steps</small>
            </div>
            <SettingsSwitch
              checked={settings.voiceGuidance}
              label="Voice Guidance"
              onClick={() => toggleSetting("voiceGuidance")}
            />
          </div>

          <div className="settings-row">
            <SettingsIcon name="highcontrast" />
            <div className="settings-row-copy">
              <strong>High Contrast</strong>
              <small>Stronger text and borders</small>
            </div>
            <SettingsSwitch
              checked={settings.highContrastMode}
              label="High Contrast"
              onClick={() => toggleSetting("highContrastMode")}
            />
          </div>

          <div className="settings-row">
            <SettingsIcon name="simplemode" />
            <div className="settings-row-copy">
              <strong>Simple Mode</strong>
              <small>Less detail on each screen</small>
            </div>
            <SettingsSwitch
              checked={settings.simpleMode}
              label="Simple Mode"
              onClick={() => toggleSetting("simpleMode")}
            />
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h2>Privacy &amp; Data</h2>
        <div className="settings-panel">
          <Link to="/manage-consent" className="settings-row settings-link-row">
            <SettingsIcon name="shieldwithcheck" />
            <div className="settings-row-copy">
              <strong>Manage Consent</strong>
              <small>Review image and advisory permissions</small>
            </div>
            <span className="settings-chevron" aria-hidden="true">›</span>
          </Link>

          <button type="button" className="settings-row settings-link-row" onClick={clearHistory}>
            <SettingsIcon name="delete" tone="red" />
            <div className="settings-row-copy">
              <strong>Delete History</strong>
              <small>{historyCleared ? "Saved history cleared" : "Remove saved scan records"}</small>
            </div>
            <span className="settings-chevron" aria-hidden="true">›</span>
          </button>

          <Link to="/about" className="settings-row settings-link-row">
            <SettingsIcon name="information" />
            <div className="settings-row-copy">
              <strong>About RiceCare AI</strong>
              <small>Version and advisory details</small>
            </div>
            <span className="settings-chevron" aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      <aside className="settings-note">
        <SettingsIcon name="shield" />
        <p>Your images are used only for advisory analysis in this prototype.</p>
      </aside>
    </AppShell>
  );
}
