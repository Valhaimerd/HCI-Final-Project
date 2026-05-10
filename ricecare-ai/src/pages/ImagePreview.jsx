import { useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card, ImagePreviewCard } from "../components";
import { riskAwarenessNote } from "../data/mockAiResults";

export default function ImagePreview() {
  const navigate = useNavigate();
  const { selectedImage, analysisMode } = useRiceCare();

  return (
    <AppShell title="Review Image" backTo="/scan" showNav={false} className="no-nav">
      <ImagePreviewCard image={selectedImage} title="Detected symptom areas are highlighted for the prototype." />
      <Card>
        <h2>Make sure the affected area is clear</h2>
        <ul className="check-list">
          <li>Affected area visible</li>
          <li>Image is not too blurry</li>
          <li>Lighting is clear</li>
          <li>Plant part is centered</li>
        </ul>
      </Card>
      <AdvisoryNotice type="warning">{riskAwarenessNote}</AdvisoryNotice>
      <ActionStack>
        <Button to={`/analyzing?mode=${analysisMode}`} icon="analyze">Analyze Image</Button>
        <Button onClick={() => navigate("/poor-image")} variant="warning">Image looks unclear</Button>
        <Button to="/scan" variant="secondary">Retake Photo</Button>
        <Button to="/photo-guide" variant="text">Photo Guide</Button>
      </ActionStack>
    </AppShell>
  );
}
