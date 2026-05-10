export default function Modal({ title, children }) {
  return (
    <div className="modal-panel" role="dialog" aria-modal="true" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
