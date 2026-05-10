export const mockReviewRequest = {
  id: "review-001",
  farmerName: "Sample Farmer",
  location: "Barangay Sample",
  description: "Brown spots appeared on many leaves after heavy rain.",
  contactNumber: "",
  submittedResult: "Rice Blast Disease",
  confidence: 86,
  riskLevel: "High",
  status: "Under Review",
  submittedAt: "March 21, 2026, 9:30 AM",
  timeline: [
    { label: "Request Submitted", status: "Completed" },
    { label: "Technician Review", status: "In Progress" },
    { label: "Recommendation Update", status: "Pending" },
  ],
};
