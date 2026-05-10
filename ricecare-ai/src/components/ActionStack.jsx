export default function ActionStack({ children, className = "" }) {
  return <div className={`action-stack ${className}`}>{children}</div>;
}
