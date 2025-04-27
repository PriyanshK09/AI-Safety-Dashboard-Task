"use client"

import { useState } from "react"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { TopBar } from "../../components/topbar/TopBar"
import { DashboardCards } from "../../components/dashboard-cards/DashboardCards"
import { IncidentList } from "../../components/incident-list/IncidentList"
import { Charts } from "../../components/charts/Charts"
import { ReportIncidentForm } from "../../components/report-incident-form/ReportIncidentForm"
import type { Incident, SeverityType } from "../../lib/types"
import { initialIncidents } from "../../lib/data"
import "./Dashboard.css"

export function Dashboard() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents)
  const [severityFilter, setSeverityFilter] = useState<SeverityType | "all">("all")
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("dashboard")

  // Filter and sort incidents
  const filteredIncidents = incidents
    .filter((incident) => {
      // Filter by severity
      const severityMatch = severityFilter === "all" || incident.severity === severityFilter

      // Filter by search query
      const searchMatch =
        incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incident.description.toLowerCase().includes(searchQuery.toLowerCase())

      return severityMatch && searchMatch
    })
    .sort((a, b) => {
      // Sort by date
      const dateA = new Date(a.reportedAt).getTime()
      const dateB = new Date(b.reportedAt).getTime()
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB
    })

  // Add new incident
  const handleAddIncident = (incident: Omit<Incident, "id">) => {
    const newIncident: Incident = {
      ...incident,
      id: (incidents.length + 1).toString(),
    }
    setIncidents([...incidents, newIncident])
  }

  // Calculate statistics
  const stats = {
    total: incidents.length,
    high: incidents.filter((i) => i.severity === "high").length,
    medium: incidents.filter((i) => i.severity === "medium").length,
    low: incidents.filter((i) => i.severity === "low").length,
  }

  return (
    <div className="dashboard-container">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="dashboard-content">
        <TopBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <main className="dashboard-main">
          <div className="dashboard-inner">
            <h1 className="dashboard-title">Dashboard</h1>

            <DashboardCards stats={stats} />

            <div className="dashboard-grid">
              <div className="dashboard-grid-main">
                <div className="dashboard-incidents-container">
                  <h2 className="dashboard-section-title">Recent Incidents</h2>
                  <IncidentList
                    incidents={filteredIncidents}
                    severityFilter={severityFilter}
                    onSeverityFilterChange={setSeverityFilter}
                    sortOrder={sortOrder}
                    onSortOrderChange={setSortOrder}
                  />
                </div>

                <Charts incidents={incidents} />
              </div>

              <div className="dashboard-grid-sidebar">
                <ReportIncidentForm onSubmit={handleAddIncident} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
