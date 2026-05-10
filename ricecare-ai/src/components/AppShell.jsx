import Header from "./Header";
import BottomNav from "./BottomNav";

export default function AppShell({ title, backTo, children, showNav = true, className = "" }) {
  return (
    <div className={`screen ${className}`}>
      {title && <Header title={title} backTo={backTo} />}
      <main className="screen-content">{children}</main>
      {showNav && <BottomNav />}
    </div>
  );
}
