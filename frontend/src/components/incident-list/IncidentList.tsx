"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter, ArrowUpDown } from "lucide-react"
import type { Incident, SeverityType } from "../../lib/types"
import { formatDate } from "../../lib/utils"
import "./IncidentList.css"

interface IncidentListProps {
  incidents: Incident[]
  severityFilter: SeverityType | "all"
  onSeverityFilterChange: (filter: SeverityType | "all") => void
  sortOrder: "newest" | "oldest"
  onSortOrderChange: (order: "newest" | "oldest") => void
}

export function IncidentList({
  incidents,
  severityFilter,
  onSeverityFilterChange,
  sortOrder,
  onSortOrderChange,
}: IncidentListProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const newExpandedIds = new Set(expandedIds)
    if (expandedIds.has(id)) {
      newExpandedIds.delete(id)
    } else {
      newExpandedIds.add(id)
    }
    setExpandedIds(newExpandedIds)
  }

  return (
    <div className="incident-list">
      <div className="filter-controls">
        <div className="filter-label">
          <Filter size={16} className="filter-icon" />
          <span>Filter:</span>
        </div>

        <button
          className={`filter-button ${severityFilter === "all" ? "active" : ""}`}
          onClick={() => onSeverityFilterChange("all")}
        >
          All
        </button>

        <button
          className={`filter-button low ${severityFilter === "low" ? "active" : ""}`}
          onClick={() => onSeverityFilterChange("low")}
        >
          Low
        </button>

        <button
          className={`filter-button medium ${severityFilter === "medium" ? "active" : ""}`}
          onClick={() => onSeverityFilterChange("medium")}
        >
          Medium
        </button>

        <button
          className={`filter-button high ${severityFilter === "high" ? "active" : ""}`}
          onClick={() => onSeverityFilterChange("high")}
        >
          High
        </button>

        <div className="sort-controls">
          <ArrowUpDown size={16} className="sort-icon" />
          <button
            className={`sort-button ${sortOrder === "newest" ? "active" : ""}`}
            onClick={() => onSortOrderChange("newest")}
          >
            Newest
          </button>
          <span className="sort-separator">|</span>
          <button
            className={`sort-button ${sortOrder === "oldest" ? "active" : ""}`}
            onClick={() => onSortOrderChange("oldest")}
          >
            Oldest
          </button>
        </div>
      </div>

      {incidents.length === 0 ? (
        <div className="no-incidents">No incidents match your current filters.</div>
      ) : (
        <div className="incidents">
          {incidents.map((incident) => (
            <div key={incident.id} className="incident-card">
              <div className="incident-header">
                <div>
                  <h3 className="incident-title">{incident.title}</h3>
                  <div className="incident-meta">
                    <span className={`incident-badge ${incident.severity}`}>{incident.severity}</span>
                    <span className="incident-date">{formatDate(incident.reportedAt)}</span>
                  </div>
                </div>

                <button className="details-button" onClick={() => toggleExpanded(incident.id)}>
                  {expandedIds.has(incident.id) ? (
                    <>
                      <ChevronUp size={16} className="details-icon" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} className="details-icon" />
                      View Details
                    </>
                  )}
                </button>
              </div>

              {expandedIds.has(incident.id) && (
                <div className="incident-details">
                  <p>{incident.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
