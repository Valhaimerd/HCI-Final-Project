import { Link } from "react-router-dom";
import { AppShell, Button, Card, Icon } from "../components";

export default function Home() {
  return (
    <AppShell className="dashboard-screen">
      <header className="dashboard-brand">
        <Link className="dashboard-logo" to="/home" aria-label="RiceCare AI home">
          <Icon name="plant" size={23} />
          <span>RiceCare AI</span>
        </Link>
        <Link className="dashboard-help-icon" to="/help" aria-label="Open Help Center">
          <Icon name="help" size={21} />
        </Link>
      </header>

      <section className="dashboard-intro" aria-labelledby="dashboard-title">
        <h1 id="dashboard-title">Hello, Farmer</h1>
        <p>What would you like to check today?</p>
      </section>

      <Card className="dashboard-scan-card">
        <div className="dashboard-scan-image" aria-hidden="true" />
        <div className="dashboard-scan-content">
          <h2>Check your rice plant health</h2>
          <p>Use our AI to identify diseases instantly.</p>
          <Button to="/scan" icon="scan">Scan Rice Plant</Button>
        </div>
      </Card>

      <section className="dashboard-quick-grid" aria-label="Quick actions">
        <Link className="dashboard-tile" to="/scan">
          <span className="dashboard-icon-badge dashboard-icon-badge-green">
            <Icon name="upload" size={26} />
          </span>
          <strong>Upload Image</strong>
        </Link>
        <Link className="dashboard-tile" to="/history">
          <span className="dashboard-icon-badge">
            <Icon name="history" size={24} />
          </span>
          <strong>View Previous Results</strong>
        </Link>
      </section>

      <Link className="dashboard-technician-card" to="/technician-support">
        <span className="dashboard-icon-badge">
          <Icon name="technician" size={24} />
        </span>
        <span>
          <strong>Ask Technician</strong>
          <small>Get expert advice for complex issues</small>
        </span>
      </Link>

      <section className="dashboard-secondary-grid" aria-label="Support links">
        <Link className="dashboard-small-card" to="/help">
          <Icon name="help" size={22} />
          <span>Help Center</span>
        </Link>
        <Link className="dashboard-small-card" to="/settings">
          <Icon name="accessibility" size={22} />
          <span>Accessibility Settings</span>
        </Link>
      </section>

      <aside className="dashboard-tip">
        <Icon name="tip" size={23} />
        <p>
          <strong>Tip:</strong> Take a clear photo of the affected leaf in good lighting
          to ensure the highest AI accuracy.
        </p>
      </aside>
    </AppShell>
  );
}
