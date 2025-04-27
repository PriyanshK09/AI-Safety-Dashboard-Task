"use client"

import { LayoutDashboard, AlertTriangle, BarChart2, FileBarChart, Settings, LogOut, PlusCircle } from "lucide-react"
import "./Sidebar.css"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "incidents", label: "Incidents", icon: AlertTriangle },
    { id: "report", label: "Report Incident", icon: PlusCircle },
    { id: "statistics", label: "Statistics", icon: BarChart2 },
    { id: "reports", label: "Reports", icon: FileBarChart },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <AlertTriangle size={18} />
          </div>
          <h1 className="sidebar-title">AI Safety Hub</h1>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`sidebar-nav-item ${activeSection === item.id ? "active" : ""}`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-separator"></div>
        <div className="sidebar-user">
          <div className="sidebar-avatar">
            <img src="/placeholder.svg" alt="User" />
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">Jane Doe</p>
            <p className="sidebar-user-role">Safety Analyst</p>
          </div>
          <button className="sidebar-logout-button">
            <LogOut size={16} />
            <span className="sr-only">Log out</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
