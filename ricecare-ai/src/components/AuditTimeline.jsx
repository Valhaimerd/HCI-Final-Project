export default function AuditTimeline({ events = [] }) {
  return (
    <ol className="timeline">
      {events.map((event, index) => (
        <li key={`${event}-${index}`}>
          <span className="timeline-dot" />
          <span>{event}</span>
        </li>
      ))}
    </ol>
  );
}
