import { Link } from "react-router-dom";
import { AppShell, Button, Icon } from "../components";

export default function PhotoGuide() {
  return (
    <AppShell showNav={false} className="photo-guide-screen no-nav">
      <header className="guide-topbar">
        <Link to="/scan" className="screen-icon-button" aria-label="Back to scan">
          <Icon name="back" size={24} />
        </Link>
        <h1>Photo Guide</h1>
        <Link to="/help" className="screen-icon-button" aria-label="Help">
          <Icon name="help" size={24} />
        </Link>
      </header>

      <section className="photo-guide-intro">
        <h2>Take a clear rice plant photo</h2>
        <p>Good photos help RiceCare AI give more useful advisory support.</p>
      </section>

      <section className="photo-guide-card good">
        <div className="photo-guide-image" style={{ backgroundImage: "url('/images/photo-good.jpg')" }}>
          <span className="photo-status-badge">
            <Icon name="check" size={27} />
          </span>
        </div>
        <div className="photo-guide-copy">
          <h3>Ideal Photo</h3>
          <ul>
            <li>Clear and in focus</li>
            <li>Affected leaf or stem visible</li>
            <li>Good, even daylight</li>
            <li>Plant part centered in frame</li>
          </ul>
        </div>
      </section>

      <section className="photo-guide-card avoid">
        <div className="photo-guide-image" style={{ backgroundImage: "url('/images/photo-avoid.jpg')" }}>
          <span className="photo-status-badge">
            <Icon name="alert" size={27} />
          </span>
        </div>
        <div className="photo-guide-copy">
          <h3>Avoid These</h3>
          <ul>
            <li>Very dark or shadowed photos</li>
            <li>Blurry or shaky images</li>
            <li>Plant too far from camera</li>
            <li>Affected area hidden or cropped out</li>
          </ul>
        </div>
      </section>

      <div className="photo-guide-actions">
        <Button to="/scan" icon="scan">Start Scanning</Button>
        <Button to="/scan" variant="secondary">Back</Button>
      </div>
    </AppShell>
  );
}
