export const advisoryNote =
  "RiceCare AI provides advisory support only. It is not a final expert diagnosis.";

export const riskAwarenessNote =
  "Image quality, lighting, crop variety, and local field conditions may affect AI accuracy.";

export const mockAiResults = [
  {
    id: "rice-blast",
    possibleIssue: "Rice Blast Disease",
    category: "Disease",
    confidence: 86,
    riskLevel: "High",
    summary: "The image may show symptoms commonly linked to Rice Blast Disease.",
    symptoms: [
      "Irregular brown lesions",
      "Leaf spots",
      "Damaged leaf areas",
      "Possible spreading marks on leaves",
    ],
    explanation:
      "The AI detected leaf spots, irregular brown lesions, and damaged leaf areas that may match symptoms of Rice Blast.",
    alternatives: [
      { label: "Brown Spot", confidence: 9 },
      { label: "Bacterial Leaf Blight", confidence: 4 },
      { label: "Healthy Plant", confidence: 1 },
    ],
    treatmentSteps: [
      "Remove severely infected leaves when possible.",
      "Avoid excessive nitrogen fertilizer.",
      "Improve field drainage and airflow.",
      "Consult an agricultural technician before applying fungicide.",
    ],
    preventionTips: [
      "Use resistant rice varieties when available.",
      "Monitor the field regularly.",
      "Avoid overcrowding and poor water management.",
      "Report severe symptoms early.",
    ],
    recommendedPractice:
      "Check the field regularly and ask for help if the spots spread quickly.",
    technicianAdvice:
      "Ask a technician before applying fungicide or any chemical treatment.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "AI result generated", "High risk advisory shown"],
  },
  {
    id: "brown-spot",
    possibleIssue: "Brown Spot",
    category: "Disease",
    confidence: 74,
    riskLevel: "Medium",
    summary: "The image may show symptoms that look similar to Brown Spot.",
    symptoms: ["Small brown spots on leaves", "Round or oval marks", "Possible yellowing around spots"],
    explanation:
      "The AI noticed small brown marks and discoloration that may match common Brown Spot symptoms.",
    alternatives: [
      { label: "Rice Blast Disease", confidence: 14 },
      { label: "Bacterial Leaf Blight", confidence: 7 },
      { label: "Healthy Plant", confidence: 5 },
    ],
    treatmentSteps: [
      "Monitor if spots are spreading.",
      "Improve soil and crop nutrition when needed.",
      "Avoid plant stress caused by poor water or nutrient management.",
      "Ask a technician if many leaves are affected.",
    ],
    preventionTips: [
      "Use healthy seeds when possible.",
      "Keep the field clean.",
      "Maintain proper water management.",
      "Observe the crop regularly.",
    ],
    recommendedPractice:
      "Watch the affected plants for changes and compare with nearby healthy plants.",
    technicianAdvice: "Ask a technician if the spots spread or the plants weaken.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "AI result generated", "Medium risk advisory shown"],
  },
  {
    id: "bacterial-leaf-blight",
    possibleIssue: "Bacterial Leaf Blight",
    category: "Disease",
    confidence: 81,
    riskLevel: "High",
    summary: "The image may show symptoms similar to Bacterial Leaf Blight.",
    symptoms: [
      "Yellowing or drying leaf edges",
      "Long damaged areas along the leaf",
      "Possible wilting signs",
      "Spreading discoloration",
    ],
    explanation:
      "The AI detected leaf edge damage and discoloration patterns that may match Bacterial Leaf Blight symptoms.",
    alternatives: [
      { label: "Rice Blast Disease", confidence: 10 },
      { label: "Brown Spot", confidence: 6 },
      { label: "Pest Damage", confidence: 3 },
    ],
    treatmentSteps: [
      "Avoid moving through wet fields if disease is spreading.",
      "Remove or separate heavily affected plant parts when possible.",
      "Avoid excessive nitrogen fertilizer.",
      "Consult an agricultural technician for proper confirmation.",
    ],
    preventionTips: [
      "Use resistant rice varieties when available.",
      "Use clean seeds.",
      "Maintain proper spacing and field hygiene.",
      "Monitor symptoms after heavy rain or flooding.",
    ],
    recommendedPractice:
      "Check nearby plants and report severe spreading symptoms early.",
    technicianAdvice:
      "Request technician confirmation if many plants show yellowing or drying leaf edges.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "AI result generated", "High risk advisory shown"],
  },
  {
    id: "pest-damage",
    possibleIssue: "Possible Pest Damage",
    category: "Pest",
    confidence: 78,
    riskLevel: "Medium",
    summary: "The image may show leaf damage caused by pests.",
    symptoms: ["Chewed or torn leaf areas", "Uneven leaf damage", "Small damaged patches", "Possible feeding marks"],
    explanation:
      "The AI detected damaged leaf areas that may match common pest feeding marks.",
    alternatives: [
      { label: "Brown Spot", confidence: 11 },
      { label: "Rice Blast Disease", confidence: 7 },
      { label: "Healthy Plant", confidence: 4 },
    ],
    treatmentSteps: [
      "Inspect the plant closely for visible insects or eggs.",
      "Check if nearby plants have the same damage.",
      "Remove affected leaves only if damage is severe.",
      "Ask a technician before using pesticide.",
    ],
    preventionTips: [
      "Monitor the field regularly.",
      "Keep field surroundings clean.",
      "Encourage proper field sanitation.",
      "Report unusual pest activity early.",
    ],
    recommendedPractice:
      "Observe the field early in the morning or late afternoon when some pests may be more visible.",
    technicianAdvice:
      "Ask a technician before applying pesticide, especially if the pest is not clearly identified.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "AI result generated", "Pest advisory shown"],
  },
  {
    id: "healthy-plant",
    possibleIssue: "No major visible issue detected",
    category: "Healthy",
    confidence: 91,
    riskLevel: "Low",
    summary: "The image does not show strong visible symptoms of pest or disease.",
    symptoms: [
      "Leaf color appears normal",
      "No major spots detected",
      "No strong visible pest damage",
      "Plant area appears stable",
    ],
    explanation:
      "RiceCare AI did not detect strong visible symptoms in this image. Continue regular field monitoring.",
    alternatives: [
      { label: "Brown Spot", confidence: 4 },
      { label: "Pest Damage", confidence: 3 },
      { label: "Rice Blast Disease", confidence: 2 },
    ],
    treatmentSteps: [
      "No immediate treatment is suggested based on this image.",
      "Continue observing the crop.",
      "Scan again if symptoms appear.",
      "Ask a technician if the plant condition changes.",
    ],
    preventionTips: [
      "Maintain regular field monitoring.",
      "Keep proper water management.",
      "Observe plants after heavy rain or pest activity.",
      "Compare with nearby plants for early changes.",
    ],
    recommendedPractice:
      "Continue normal field care and scan again if new symptoms appear.",
    technicianAdvice:
      "Ask a technician if symptoms appear later or if many plants start changing color.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "AI result generated", "Low risk advisory shown"],
  },
  {
    id: "uncertain",
    possibleIssue: "Uncertain Result",
    category: "Needs Review",
    confidence: 48,
    riskLevel: "Needs Review",
    summary: "The image does not clearly match one known pest or disease.",
    symptoms: [
      "Symptoms are not clear",
      "Image may be blurry or poorly lit",
      "Affected area may not be visible enough",
      "Possible mixed symptoms",
    ],
    explanation:
      "RiceCare AI cannot confidently identify the issue from this image. Please retake the photo or ask a technician for confirmation.",
    alternatives: [
      { label: "Brown Spot", confidence: 24 },
      { label: "Pest Damage", confidence: 18 },
      { label: "Rice Blast Disease", confidence: 6 },
    ],
    treatmentSteps: [
      "Retake the photo with better lighting.",
      "Move closer to the affected leaf or stem.",
      "Check if the affected area is clearly visible.",
      "Ask a technician before taking treatment action.",
    ],
    preventionTips: [
      "Take photos during good daylight.",
      "Focus on the affected area.",
      "Avoid blurry or dark images.",
      "Capture another image if symptoms are unclear.",
    ],
    recommendedPractice:
      "Use the photo guide and submit the case for human review if symptoms continue.",
    technicianAdvice:
      "Technician review is recommended because the AI confidence is low.",
    advisoryNote,
    riskAwarenessNote,
    auditEvents: ["Image checked", "Low confidence result generated", "Human review recommended"],
  },
];
