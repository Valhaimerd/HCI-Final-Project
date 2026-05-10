export default function FormField({ label, value, onChange, placeholder, textarea = false, required = false }) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const commonProps = {
    id,
    value,
    onChange: (event) => onChange(event.target.value),
    placeholder,
    required,
  };

  return (
    <label className="field" htmlFor={id}>
      <span>{label}{required ? "" : " (optional)"}</span>
      {textarea ? <textarea {...commonProps} /> : <input {...commonProps} />}
    </label>
  );
}
