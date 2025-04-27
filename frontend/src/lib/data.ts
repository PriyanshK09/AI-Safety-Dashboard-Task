import type { Incident } from "./types"

export const initialIncidents: Incident[] = [
  {
    id: "1",
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination issues. The bias was identified during a routine audit of recommendation patterns.",
    severity: "medium",
    reportedAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "2",
    title: "LLM Hallucination in Critical Info",
    description:
      "Large Language Model provided incorrect safety procedure information when asked about emergency protocols. This could have led to dangerous situations if the information had been followed in a real emergency.",
    severity: "high",
    reportedAt: "2025-04-01T14:30:00Z",
  },
  {
    id: "3",
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata during conversation. The leak was limited to non-identifying information and was quickly patched after discovery.",
    severity: "low",
    reportedAt: "2025-03-20T09:15:00Z",
  },
  {
    id: "4",
    title: "Facial Recognition False Positive",
    description:
      "Security system incorrectly identified an employee as an unauthorized person, triggering unnecessary security protocols. The system has been recalibrated to prevent similar false positives.",
    severity: "medium",
    reportedAt: "2025-03-25T11:45:00Z",
  },
  {
    id: "5",
    title: "AI-Generated Content Misattribution",
    description:
      "AI system generated content that was incorrectly attributed to a human author in a published article. The publication has issued a correction and implemented additional verification steps.",
    severity: "low",
    reportedAt: "2025-03-18T16:20:00Z",
  },
  {
    id: "6",
    title: "Autonomous Vehicle Navigation Failure",
    description:
      "Test vehicle failed to properly identify a construction zone, requiring emergency driver intervention. No injuries occurred, but the incident highlighted a significant gap in the perception system.",
    severity: "high",
    reportedAt: "2025-03-30T08:10:00Z",
  },
  {
    id: "7",
    title: "Medical Diagnosis AI False Negative",
    description:
      "AI diagnostic tool failed to flag a visible anomaly in medical imaging that was later identified by a human radiologist. The system is being retrained with additional examples of similar anomalies.",
    severity: "high",
    reportedAt: "2025-03-28T13:40:00Z",
  },
]
