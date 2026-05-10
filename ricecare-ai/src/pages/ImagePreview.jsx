import { Link, useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Button, Icon } from "../components";
import { riskAwarenessNote } from "../data/mockAiResults";

export default function ImagePreview() {
  const navigate = useNavigate();
  const { selectedImage, analysisMode } = useRiceCare();
  const previewImage = selectedImage || "/images/scan-rice.jpg";

  return (
    <AppShell showNav={false} className="review-screen no-nav">
      <header className="guide-topbar">
        <Link to="/scan" className="screen-icon-button" aria-label="Back to scan">
          <Icon name="back" size={24} />
        </Link>
        <h1>Review Image</h1>
        <Link to="/photo-guide" className="screen-icon-button" aria-label="Photo guide">
          <Icon name="help" size={24} />
        </Link>
      </header>

      <section className="review-intro">
        <h2>Check the photo before analysis</h2>
        <p>Make sure the damaged area is easy to see before continuing.</p>
      </section>

      <section className="review-preview-card">
        <div className="review-image" style={{ backgroundImage: `url("${previewImage}")` }}>
          <span className="review-focus-corner top-left" />
          <span className="review-focus-corner top-right" />
          <span className="review-focus-corner bottom-left" />
          <span className="review-focus-corner bottom-right" />
          <span className="review-image-badge">
            <Icon name="image" size={26} />
          </span>
        </div>
        <div className="review-ready-pill">
          <Icon name="check" size={18} />
          <strong>Image ready for advisory check</strong>
        </div>
      </section>

      <section className="review-check-card">
        <h2>Before analyzing, check:</h2>
        <ul className="scan-check-list">
          <li><Icon name="check" size={17} />Clear, in-focus image</li>
          <li><Icon name="check" size={17} />Affected part visible</li>
          <li><Icon name="check" size={17} />Good, even lighting</li>
          <li><Icon name="check" size={17} />Leaf centered in frame</li>
        </ul>
      </section>

      <aside className="review-warning">
        <span className="review-warning-icon">
          <Icon name="alert" size={20} />
        </span>
        <p>{riskAwarenessNote}</p>
      </aside>

      <div className="review-actions">
        <Button to={`/analyzing?mode=${analysisMode}`} icon="analyze">Analyze Image</Button>
        <Button onClick={() => navigate("/poor-image")} variant="warning">Image looks unclear</Button>
        <Button to="/scan" variant="secondary">Retake Photo</Button>
        <Button to="/photo-guide" variant="text">Need help taking a photo?</Button>
      </div>
    </AppShell>
  );
}
