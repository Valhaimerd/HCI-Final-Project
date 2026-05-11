import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRiceCare } from "../App";
import { AppShell, Button, Card, Icon } from "../components";

export default function Analyzing() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { selectedImage } = useRiceCare();
  const mode = params.get("mode") || "random";
  const analysisImage = selectedImage || "/images/scan-rice.jpg";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate(`/result?mode=${encodeURIComponent(mode)}`, { replace: true });
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [mode, navigate]);

  return (
    <AppShell showNav={false} className="no-nav analyzing-screen">
      <header className="analyzing-brand">
        <Link className="analyzing-brand-icon" to="/home" aria-label="RiceCare AI home">
          <Icon name="plant" size={23} />
        </Link>
        <strong>RiceCare AI</strong>
        <Link className="dashboard-help-icon" to="/help" aria-label="Open Help Center">
          <Icon name="help" size={21} />
        </Link>
      </header>

      <section className="analyzing-intro" aria-labelledby="analyzing-title">
        <h1 id="analyzing-title">Analyzing Image</h1>
        <p>Please wait while RiceCare AI checks the image.</p>
      </section>

      <section
        className="analyzing-preview"
        aria-label="Image analysis animation"
        style={{ "--analysis-image": `url("${analysisImage}")` }}
      >
        <div className="analyzing-corners" />
        <div className="analyzing-scan-line" />
        <Icon name="analyze" size={68} />
      </section>

      <Card className="analysis-progress-card">
        <div className="analysis-progress-heading">
          <span>Analysis Progress</span>
          <strong>60%</strong>
        </div>
        <div className="analysis-progress-track" aria-hidden="true">
          <div className="analysis-progress-fill" />
        </div>
        <ol className="analysis-steps">
          <li className="complete">
            <Icon name="check" size={20} />
            <span>Checking plant image</span>
          </li>
          <li className="active">
            <span className="analysis-step-dot" />
            <strong>Detecting visible symptoms</strong>
          </li>
          <li>
            <span className="analysis-step-dot" />
            <span>Preparing advisory result</span>
          </li>
        </ol>
      </Card>

      <Button to="/scan" variant="secondary">Cancel Analysis</Button>
    </AppShell>
  );
}
