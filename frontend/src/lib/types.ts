export type SeverityType = "low" | "medium" | "high"

export interface Incident {
  id: string
  title: string
  description: string
  severity: SeverityType
  reportedAt: string
}
