import { ActionStack, AppShell, Button } from "../components";

export default function Welcome() {
  return (
    <AppShell showNav={false} className="no-nav welcome-screen">
      <section className="welcome-main" aria-labelledby="welcome-title">
        <img className="logo welcome-logo" src="/images/Logo.png" alt="RiceCare AI logo" />
        <h1 id="welcome-title" className="title-large">RiceCare AI</h1>
        <p className="subtitle">Pest and Disease Advisory for Rice Farmers</p>
        <p className="welcome-copy">Get quick guidance for possible rice pests and diseases.</p>
        <ActionStack className="welcome-actions">
          <Button to="/consent">Get Started</Button>
        </ActionStack>
      </section>
      <p className="welcome-disclaimer">
        For decision support only. Consult an agricultural technician when needed.
      </p>
    </AppShell>
  );
}
