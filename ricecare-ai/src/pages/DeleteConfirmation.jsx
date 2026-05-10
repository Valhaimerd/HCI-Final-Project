import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useRiceCare } from "../App";
import { ActionStack, AppShell, Button, Card } from "../components";

export default function DeleteConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { historyItems, deleteResult } = useRiceCare();
  const item = historyItems.find((record) => record.id === id);

  if (!item) return <Navigate to="/history" replace />;

  const remove = () => {
    deleteResult(id);
    navigate("/history");
  };

  return (
    <AppShell title="Delete Saved Result?" backTo={`/result-details/${id}`} showNav={false} className="no-nav">
      <Card>
        <h2>Delete Saved Result?</h2>
        <p>This will remove the saved scan result from your history.</p>
        <p>Result: {item.possibleIssue}</p>
      </Card>
      <ActionStack>
        <Button onClick={remove} variant="danger">Delete Result</Button>
        <Button to={`/result-details/${id}`} variant="secondary">Cancel</Button>
      </ActionStack>
    </AppShell>
  );
}
