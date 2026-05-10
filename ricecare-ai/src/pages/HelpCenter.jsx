import { ActionStack, AppShell, Button, Card, HelpCard } from "../components";

const helpCards = [
  {
    icon: "scan",
    title: "How to Scan a Rice Plant",
    summary: "Start a guided scan flow.",
    to: "/scan",
  },
  {
    icon: "camera",
    title: "How to Take a Clear Photo",
    summary: "Use better lighting and framing.",
    to: "/photo-guide",
  },
  {
    icon: "help",
    title: "Understanding Your Result",
    summary: "Learn what possible issue, confidence, and risk level mean.",
    to: "/help/understanding-ai-results",
  },
  {
    icon: "technician",
    title: "When to Ask a Technician",
    summary: "Know when human confirmation is important.",
    to: "/help/when-to-ask-technician",
  },
  {
    icon: "leaf",
    title: "Common Rice Plant Problems",
    summary: "Review common signs and when to ask for help.",
    to: "/common-problems",
  },
  {
    icon: "privacy",
    title: "Privacy and Image Use",
    summary: "Understand consent and saved records.",
    to: "/help/privacy-and-image-use",
  },
  {
    icon: "information",
    title: "Frequently Asked Questions",
    summary: "Quick answers about RiceCare AI.",
    to: "/help/frequently-asked-questions",
  },
  {
    icon: "alert",
    title: "Report App Problem",
    summary: "Prototype support for reporting an issue.",
    to: "/help/report-app-problem",
  },
];

export default function HelpCenter() {
  return (
    <AppShell title="Help Center">
      <Card>
        <h2>Learn and get support</h2>
        <p>Learn how to scan rice plants, understand AI results, and know when to ask for technician support.</p>
      </Card>
      {helpCards.map((card) => (
        <HelpCard key={card.title} {...card} />
      ))}
      <ActionStack>
        <Button to="/technician-support">Ask Technician</Button>
        <Button to="/home" variant="text">Back to Home</Button>
      </ActionStack>
    </AppShell>
  );
}
