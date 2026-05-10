import { ActionStack, AppShell, Button, Card } from "../components";

export default function PhotoGuide() {
  return (
    <AppShell title="Photo Guide" backTo="/scan">
      <Card>
        <h2>How to take a good photo</h2>
        <p>Clear photos help RiceCare AI provide a more useful advisory result.</p>
      </Card>
      <div className="grid-two">
        <Card>
          <h3>Good Photo</h3>
          <ul className="check-list">
            <li>Clear and bright</li>
            <li>Affected area visible</li>
            <li>Close enough to see spots</li>
            <li>Leaf or stem centered</li>
          </ul>
        </Card>
        <Card>
          <h3>Avoid This</h3>
          <ul className="plain-list">
            <li>Too blurry</li>
            <li>Too dark</li>
            <li>Too far from the plant</li>
            <li>Affected area blocked</li>
          </ul>
        </Card>
      </div>
      <ActionStack>
        <Button to="/scan">Start Scanning</Button>
        <Button to="/scan" variant="secondary">Back</Button>
      </ActionStack>
    </AppShell>
  );
}
