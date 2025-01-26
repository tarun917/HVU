// src/chatbot/services/faqService.js
import Fuse from "fuse.js";
import { faqData } from "../data/faqData";

const fuseOptions = {
  keys: ["question"],
  threshold: 0.3, // जितना कम, उतना सख्त मैच
};

const fuse = new Fuse(faqData, fuseOptions);

/**
 * यूज़र के question को Fuse.js से सर्च करके सबसे अच्छा मैच रिटर्न करता है
 */
export function getFaqAnswer(userQuery) {
  if (!userQuery) return null;

  const results = fuse.search(userQuery);

  if (results.length > 0) {
    return results[0].item.answer; // सबसे अच्छा मैच
  }

  return null; // कोई मैच नहीं मिला
}
