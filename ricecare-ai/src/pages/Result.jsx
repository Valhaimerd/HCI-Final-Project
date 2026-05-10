import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRiceCare } from "../App";
import { getMockAiResult } from "../utils/mockAnalysis";
import { mockAiResults } from "../data/mockAiResults";
import {
  ActionStack,
  AdvisoryNotice,
  AppShell,
  Button,
  Card,
  ConfidenceBar,
  ImagePreviewCard,
  RiskBadge,
} from "../components";

export default function Result() {
  const [params] = useSearchParams();
  const { currentAiResult, setCurrentAiResult, selectedImage } = useRiceCare();
  const mode = params.get("mode");

  useEffect(() => {
    if (mode) setCurrentAiResult(getMockAiResult(mode));
  }, [mode, setCurrentAiResult]);

  const result = currentAiResult || mockAiResults[0];
  const isUncertain = result.id === "uncertain";
  const isHealthy = result.id === "healthy-plant";

  return (
    <AppShell title="Analysis Result" backTo="/scan" showNav={false} className="no-nav">
      <Card className="result-summary">
        <div className="row row-between">
          <div>
            <p className="eyebrow">Possible Issue</p>
            <h2>{result.possibleIssue}</h2>
            <p>{result.category}</p>
          </div>
          <RiskBadge riskLevel={result.riskLevel} />
        </div>
        <ConfidenceBar confidence={result.confidence} />
      </Card>
      <ImagePreviewCard image={selectedImage} title="Detected symptom areas" />
      <Card>
        <h3>Why this result?</h3>
        <p>{result.explanation}</p>
      </Card>
      <Card>
        <h3>Detected symptoms</h3>
        <ul className="check-list">
          {result.symptoms.map((symptom) => <li key={symptom}>{symptom}</li>)}
        </ul>
      </Card>
      <Card>
        <h3>Other possible matches</h3>
        <ul className="plain-list">
          {result.alternatives.map((item) => (
            <li key={item.label}>{item.label} - {item.confidence}%</li>
          ))}
        </ul>
      </Card>
      {isUncertain && (
        <AdvisoryNotice type="warning">
          The image does not clearly match one known pest or disease. Please retake the photo or ask a technician for confirmation.
        </AdvisoryNotice>
      )}
      {result.riskLevel === "High" && (
        <AdvisoryNotice type="warning">
          Ask a technician before applying chemical treatment, especially when many plants are affected.
        </AdvisoryNotice>
      )}
      <AdvisoryNotice>{result.advisoryNote}</AdvisoryNotice>
      <AdvisoryNotice type="warning">{result.riskAwarenessNote}</AdvisoryNotice>
      <ActionStack>
        {isUncertain ? (
          <>
            <Button to="/scan">Retake Photo</Button>
            <Button to="/technician-support" variant="secondary">Ask Technician</Button>
            <Button to="/recommendations" variant="text">View Possible Matches</Button>
            <Button to="/report-wrong-result" variant="warning">Report Wrong Result</Button>
          </>
        ) : isHealthy ? (
          <>
            <Button to="/save-confirmation">Save Result</Button>
            <Button to="/scan" variant="secondary">Scan Another Plant</Button>
            <Button to="/recommendations" variant="secondary">View Care Tips</Button>
            <Button to="/technician-support" variant="text">Ask Technician if Needed</Button>
            <Button to="/report-wrong-result" variant="warning">Report Wrong Result</Button>
          </>
        ) : (
          <>
            <Button to="/recommendations">View Recommendations</Button>
            <Button to="/technician-support" variant="secondary">Ask Technician</Button>
            <Button to="/report-wrong-result" variant="warning">Report Wrong Result</Button>
            <Button to="/scan" variant="text">Retake Photo</Button>
          </>
        )}
      </ActionStack>
    </AppShell>
  );
}
