import { useEffect, useRef } from "react";
import { useRiceCare } from "../App";
import { ActionStack, AppShell, Button, Card, Icon } from "../components";

export default function SaveConfirmation() {
  const { saveCurrentResult } = useRiceCare();
  const saved = useRef(false);

  useEffect(() => {
    if (!saved.current) {
      saved.current = true;
      saveCurrentResult();
    }
  }, [saveCurrentResult]);

  return (
    <AppShell title="Result Saved" showNav={false} className="no-nav">
      <Card>
        <div className="section" style={{ alignItems: "center", textAlign: "center" }}>
          <Icon name="save" size={56} />
          <h2>Result Saved</h2>
          <p>This scan result was saved to your history.</p>
        </div>
      </Card>
      <ActionStack>
        <Button to="/history">View History</Button>
        <Button to="/scan" variant="secondary">Scan Another Plant</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
