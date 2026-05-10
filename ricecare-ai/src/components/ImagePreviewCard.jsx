import Card from "./Card";

export default function ImagePreviewCard({ title = "Rice plant image", image }) {
  return (
    <Card className="image-card">
      <div className="plant-preview" style={image ? { backgroundImage: `url(${image})` } : undefined}>
        <span className="symptom-marker marker-one" />
        <span className="symptom-marker marker-two" />
        {!image && (
          <div className="plant-illustration">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
      <p className="caption">{title}</p>
    </Card>
  );
}
