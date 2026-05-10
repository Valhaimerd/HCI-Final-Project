import { advisoryNote, riskAwarenessNote } from "./mockAiResults";

export const helpArticles = [
  {
    id: "understanding-ai-results",
    title: "Understanding Your Result",
    summary: "Learn what possible issue, confidence, and risk level mean.",
    sections: [
      {
        heading: "Possible Issue",
        body: "This shows what pest or disease RiceCare AI thinks may be affecting the rice plant.",
      },
      {
        heading: "Confidence Score",
        body: "Confidence shows how strongly the image matches known symptoms. A high confidence score does not mean the result is always final.",
      },
      {
        heading: "Risk Level",
        body: "Risk level shows how urgent the issue may be. High risk means the farmer should ask for confirmation before treatment.",
      },
      {
        heading: "Why this result?",
        body: "This explains visible symptoms noticed in the image, such as spots, lesions, discoloration, or damaged areas.",
      },
      {
        heading: "When to Ask a Technician",
        body: "Ask a technician if confidence is low, the result seems wrong, many plants are affected, or chemical treatment may be needed.",
      },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
  {
    id: "taking-good-photos",
    title: "How to Take a Clear Photo",
    summary: "Take photos that help advisory results become more useful.",
    sections: [
      { heading: "Use good lighting", body: "Take the photo in daylight when possible." },
      { heading: "Move closer", body: "Show the affected leaf, stem, or plant part clearly." },
      { heading: "Keep it centered", body: "Place the damaged area in the middle of the photo." },
      { heading: "Avoid blur", body: "Hold the phone steady and retake the photo if it is unclear." },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
  {
    id: "when-to-ask-technician",
    title: "When to Ask a Technician",
    summary: "Know when human confirmation is important.",
    sections: [
      { heading: "Ask when unsure", body: "Ask for help if the AI result is uncertain or does not match what you see." },
      { heading: "Ask before chemicals", body: "Ask a technician before applying chemical treatment, especially when many plants are affected." },
      { heading: "Ask when symptoms spread", body: "Fast-spreading symptoms need human confirmation." },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
  {
    id: "privacy-and-image-use",
    title: "Privacy and Image Use",
    summary: "Understand how plant images and saved results are handled.",
    sections: [
      { heading: "Image use", body: "Plant images are used for advisory analysis in this prototype." },
      { heading: "Saved results", body: "Saved scan results can be viewed in History and deleted by the user." },
      { heading: "Technician sharing", body: "Sharing with a technician is simulated and shown as an optional step." },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    summary: "Quick answers about RiceCare AI.",
    sections: [
      { heading: "Is this a real diagnosis?", body: "No. RiceCare AI provides advisory support only." },
      { heading: "Does it contact a real technician?", body: "No. Technician review is simulated in this prototype." },
      { heading: "Can I delete saved results?", body: "Yes. Saved records can be removed from History." },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
  {
    id: "report-app-problem",
    title: "Report App Problem",
    summary: "Prototype support for reporting an issue.",
    sections: [
      { heading: "Prototype note", body: "This class prototype does not send real support messages." },
      { heading: "Use report flow", body: "Use Report Wrong Result if the advisory output seems incorrect." },
    ],
    advisoryNote,
    riskAwarenessNote,
  },
];
