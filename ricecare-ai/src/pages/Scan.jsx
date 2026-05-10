import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Button, Card, Icon } from "../components";

const modes = [
  ["random", "Random Result"],
  ["high-risk", "Rice Blast"],
  ["medium-risk", "Brown Spot"],
  ["bacterial-leaf-blight", "Leaf Blight"],
  ["pest", "Pest Damage"],
  ["healthy", "Healthy"],
  ["uncertain", "Uncertain"],
];

export default function Scan() {
  const navigate = useNavigate();
  const fileInput = useRef(null);
  const { setSelectedImage, analysisMode, setAnalysisMode } = useRiceCare();

  const simulatePhoto = () => {
    setSelectedImage(null);
    navigate("/image-preview");
  };

  const selectFile = (event) => {
    const file = event.target.files?.[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
    navigate("/image-preview");
  };

  return (
    <AppShell className="scan-screen">
      <header className="dashboard-brand scan-brand">
        <Link className="dashboard-logo" to="/home" aria-label="RiceCare AI home">
          <Icon name="plant" size={23} />
          <span>RiceCare AI</span>
        </Link>
        <Link className="dashboard-help-icon" to="/help" aria-label="Open Help Center">
          <Icon name="help" size={21} />
        </Link>
      </header>

      <section className="scan-intro" aria-labelledby="scan-title">
        <h1 id="scan-title">Scan Rice Plant</h1>
        <p>Position the affected leaf clearly within the frame for best AI analysis.</p>
      </section>

      <section className="scan-camera-card" aria-label="Rice plant scan frame">
        <div className="scan-focus-frame" />
        <span className="scan-bolt-badge" aria-hidden="true">
          <Icon name="lightning" size={54} />
        </span>
        <div className="scan-controls">
          <button className="scan-control-button" type="button" onClick={() => fileInput.current?.click()} aria-label="Upload from gallery">
            <Icon name="gallery" size={28} />
          </button>
          <button className="scan-shutter-button" type="button" onClick={simulatePhoto} aria-label="Take photo">
            <Icon name="camera" size={30} />
          </button>
          <button className="scan-control-button" type="button" aria-label="Toggle flash">
            <Icon name="lightning" size={28} />
          </button>
        </div>
      </section>

      <div className="scan-warning">
        <Icon name="important" size={18} />
        <strong>Image quality affects AI accuracy.</strong>
      </div>

      <Card className="scan-check-card">
        <h2>Before analyzing, check:</h2>
        <ul className="scan-check-list">
          <li><Icon name="check" size={17} />Clear, in-focus image</li>
          <li><Icon name="check" size={17} />Affected part visible</li>
          <li><Icon name="check" size={17} />Good, even lighting</li>
          <li><Icon name="check" size={17} />Leaf centered in frame</li>
        </ul>
      </Card>

      <input ref={fileInput} type="file" accept="image/*" hidden onChange={selectFile} />
      <div className="scan-actions">
        <Button to="/photo-guide" variant="text">Need help taking a photo?</Button>
      </div>

      <Card className="scan-test-card">
        <div>
          <h2>Prototype Test Mode</h2>
          <p className="optional-helper">Choose a sample result for presentation, or keep random.</p>
        </div>
        <select className="select-field" value={analysisMode} onChange={(event) => setAnalysisMode(event.target.value)}>
          {modes.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </Card>
    </AppShell>
  );
}
