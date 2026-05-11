import { mockAiResults } from "../data/mockAiResults";

const modeMap = {
  "high-risk": "rice-blast",
  "medium-risk": "brown-spot",
  pest: "pest-damage",
  healthy: "healthy-plant",
  uncertain: "uncertain",
  "bacterial-leaf-blight": "bacterial-leaf-blight",
  "sheath-blight": "sheath-blight",
  "rice-tungro": "rice-tungro",
  "stem-borer": "stem-borer",
};

export function getMockAiResult(mode = "random") {
  const target = modeMap[mode] || mode;

  if (target !== "random") {
    const selected = mockAiResults.find((result) => result.id === target);
    if (selected) return selected;
  }

  const randomIndex = Math.floor(Math.random() * mockAiResults.length);
  return mockAiResults[randomIndex];
}
