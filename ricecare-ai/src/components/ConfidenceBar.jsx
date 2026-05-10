export default function ConfidenceBar({ confidence }) {
  const tone = confidence >= 85 ? "high" : confidence >= 70 ? "medium" : confidence >= 50 ? "low" : "review";
  return (
    <div className="confidence">
      <div className="confidence-label">
        <strong>{confidence}% Confidence</strong>
        <span>A high confidence score does not mean the result is always final.</span>
      </div>
      <div className="confidence-track" aria-hidden="true">
        <div className={`confidence-fill confidence-${tone}`} style={{ width: `${confidence}%` }} />
      </div>
    </div>
  );
}
